package com.mchalet.todoapp.service;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.mchalet.todoapp.controllers.TodoListController;
import com.mchalet.todoapp.dtos.TodoListRecordDTO;
import com.mchalet.todoapp.model.TodoListModel;
import com.mchalet.todoapp.repositories.TodoListRepository;

import jakarta.validation.Valid;

@Service
public class TodoListService {
	
	@Autowired
	TodoListRepository todoListRepository;
	
    public ResponseEntity<TodoListModel> createTodoList(@RequestBody @Valid TodoListRecordDTO todoListRecordDTO) {
        var todoListModel = new TodoListModel();
        BeanUtils.copyProperties(todoListRecordDTO, todoListModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(todoListRepository.save(todoListModel));
    }
    
    public ResponseEntity<Object> getOneList(@PathVariable Integer id) {
        Optional<TodoListModel> todoList = todoListRepository.findById(id);
        if (todoList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
        }
        //todo.get().add(linkTo(methodOn(TodoListController.class).getAllTodos()).withRel("Todos List"));
        return ResponseEntity.status(HttpStatus.OK).body(todoList.get());
    }

    /*public ResponseEntity<List<TodoListModel>> getAllTodos() {
        List<TodoListModel> todosList = todoListRepository.findAll();

        if (!todosList.isEmpty()) {
            for (TodoListModel todo : todosList) {
                Integer id = todo.getId();
                todo.add(linkTo(methodOn(TodoListController.class).getOne(id)).withSelfRel());
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(todosList);
    }

    public ResponseEntity<Object> update(@PathVariable Integer id,
                                         @RequestBody @Valid TodoListRecordDTO todoRecordDTO) {
        Optional<TodoListModel> todo = todoListRepository.findById(id);
        if (todo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
        }
        var todoModel = todo.get();
        BeanUtils.copyProperties(todoRecordDTO, todoModel);
        return ResponseEntity.status(HttpStatus.OK).body(todoListRepository.save(todoModel));
    }

    public ResponseEntity<String> remove(@PathVariable Integer id) {
        Optional<TodoListModel> todo = todoListRepository.findById(id);

        if (todo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
        }

        todoListRepository.delete(todo.get());
        return ResponseEntity.status(HttpStatus.OK).body("Product deleted sucessfuly.");
    }*/
}
