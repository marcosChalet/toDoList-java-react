package com.mchalet.todoapp.service;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.mchalet.todoapp.controllers.TodoController;
import com.mchalet.todoapp.dtos.TodoRecordDTO;
import com.mchalet.todoapp.model.TodoModel;
import com.mchalet.todoapp.repositories.TodoRepository;

import jakarta.validation.Valid;

@Service
public class TodoService {
	
	@Autowired
	TodoRepository todoRepository;
	
    public ResponseEntity<TodoModel> saveTodoItem(@RequestBody @Valid TodoRecordDTO todoRecordDTO) {
        var todoModel = new TodoModel();
        BeanUtils.copyProperties(todoRecordDTO, todoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(todoRepository.save(todoModel));
    }

    public ResponseEntity<List<TodoModel>> getAllTodos() {
        List<TodoModel> todosList = todoRepository.findAll();

        if (!todosList.isEmpty()) {
            for (TodoModel todo : todosList) {
                UUID id = todo.getId();
                todo.add(linkTo(methodOn(TodoController.class).getOne(id)).withSelfRel());
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(todosList);
    }

    public ResponseEntity<Object> getOne(@PathVariable UUID id) {
        Optional<TodoModel> todo = todoRepository.findById(id);
        if (todo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
        }
        todo.get().add(linkTo(methodOn(TodoController.class).getAllTodos()).withRel("Todos List"));
        return ResponseEntity.status(HttpStatus.OK).body(todo.get());
    }

    public ResponseEntity<Object> update(@PathVariable UUID id,
                                         @RequestBody @Valid TodoRecordDTO todoRecordDTO) {
        Optional<TodoModel> todo = todoRepository.findById(id);
        if (todo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
        }
        var todoModel = todo.get();
        BeanUtils.copyProperties(todoRecordDTO, todoModel);
        return ResponseEntity.status(HttpStatus.OK).body(todoRepository.save(todoModel));
    }

    public ResponseEntity<String> remove(@PathVariable UUID id) {
        Optional<TodoModel> todo = todoRepository.findById(id);

        if (todo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo not found");
        }

        todoRepository.delete(todo.get());
        return ResponseEntity.status(HttpStatus.OK).body("Product deleted sucessfuly.");
    }
}
