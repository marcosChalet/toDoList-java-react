package com.mchalet.todoapp.controllers;

import com.mchalet.todoapp.dtos.TodoRecordDTO;
import com.mchalet.todoapp.model.TodoModel;
import com.mchalet.todoapp.service.TodoService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
public class TodoController {
	
	@Autowired
    TodoService todoService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/todos")
    public ResponseEntity<TodoModel> saveTodoItem(@RequestBody @Valid TodoRecordDTO todoRecordDTO) {
        return todoService.saveTodoItem(todoRecordDTO);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/todos")
    public ResponseEntity<List<TodoModel>> getAllTodos() {
        return todoService.getAllTodos();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/todos/{id}")
    public ResponseEntity<Object> getOne(@PathVariable UUID id) {
        return todoService.getOne(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/todos/{id}")
    public ResponseEntity<Object> update(@PathVariable UUID id,
                                         @RequestBody @Valid TodoRecordDTO todoRecordDTO) {
        return todoService.update(id, todoRecordDTO);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/todos/{id}")
    public ResponseEntity<String> remove(@PathVariable UUID id) {
        return todoService.remove(id);
    }
}
