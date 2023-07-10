package com.mchalet.todoapp.controllers;

import com.mchalet.todoapp.dtos.TodoListRecordDTO;
import com.mchalet.todoapp.model.TodoListModel;
import com.mchalet.todoapp.service.TodoListService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
public class TodoListController {
	
	@Autowired
    TodoListService todoService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/lists")
    public ResponseEntity<TodoListModel> saveTodoItem(@RequestBody @Valid TodoListRecordDTO todoListRecordDTO) {
        return todoService.createTodoList(todoListRecordDTO);
    }
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/lists/{id}")
    public ResponseEntity<Object> getOne(@PathVariable Integer id) {
        return todoService.getOneList(id);
    }

    /*@CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/todos")
    public ResponseEntity<List<TodoListModel>> getAllTodos() {
        return todoService.getAllTodos();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/todos/{id}")
    public ResponseEntity<Object> update(@PathVariable Integer id,
                                         @RequestBody @Valid TodoListRecordDTO todoRecordDTO) {
        return todoService.update(id, todoRecordDTO);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/todos/{id}")
    public ResponseEntity<String> remove(@PathVariable Integer id) {
        return todoService.remove(id);
    }*/
}
