package com.mchalet.todoapp.service;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.Optional;

import com.mchalet.todoapp.controllers.ToDoListController;
import com.mchalet.todoapp.dtos.ToDoItemRecordDTO;
import com.mchalet.todoapp.model.ToDoItemModel;
import com.mchalet.todoapp.repositories.ToDoListRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.mchalet.todoapp.dtos.ToDoListRecordDTO;
import com.mchalet.todoapp.model.ToDoListModel;

import jakarta.validation.Valid;

@Service
public class ToDoListService {
	
	@Autowired
    ToDoListRepository toDoListRepository;
	
    public ResponseEntity<ToDoListModel> createToDoList(@RequestBody @Valid ToDoListRecordDTO todoListRecordDTO) {
        var todoListModel = new ToDoListModel();
        BeanUtils.copyProperties(todoListRecordDTO, todoListModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(toDoListRepository.save(todoListModel));
    }

    public ResponseEntity<List<ToDoListModel>> getAllToDoLists() {
        List<ToDoListModel> toDoLists = toDoListRepository.findAll();

        if (!toDoLists.isEmpty()) {
            for (ToDoListModel toDos : toDoLists) {
                Integer id = toDos.getId();
                toDos.add(linkTo(methodOn(ToDoListController.class).getOneList(id)).withSelfRel());
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(toDoLists);
    }

    public ResponseEntity<Object> getOneList(@PathVariable Integer id) {
        Optional<ToDoListModel> toDoList = toDoListRepository.findById(id);

        if (toDoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ToDo not found.");
        }

        toDoList.get().add(linkTo(methodOn(ToDoListController.class).getAllToDoLists()).withRel("To-Do Lists"));
        return ResponseEntity.status(HttpStatus.OK).body(toDoList.get());
    }

    public ResponseEntity<String> deleteToDoList(Integer id) {
        Optional<ToDoListModel> todoList = toDoListRepository.findById(id);

        if (todoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("To-Do List not found.");
        }

        toDoListRepository.delete(todoList.get());
        return ResponseEntity.status(HttpStatus.OK).body("To-Do List deleted successfully.");
    }

    public ResponseEntity<Object> updateToDoList(Integer id, ToDoListRecordDTO toDoListRecordDTO) {
        Optional<ToDoListModel> oldToDoList = toDoListRepository.findById(id);

        if (oldToDoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("To-Do List not found.");
        }

        var toDoList = oldToDoList.get();
        BeanUtils.copyProperties(toDoListRecordDTO, toDoList);
        return ResponseEntity.status(HttpStatus.OK).body(toDoListRepository.save(toDoList));
    }
}
