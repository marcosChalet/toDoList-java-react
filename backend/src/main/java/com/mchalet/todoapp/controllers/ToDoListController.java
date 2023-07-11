package com.mchalet.todoapp.controllers;

import com.mchalet.todoapp.dtos.ToDoItemRecordDTO;
import com.mchalet.todoapp.dtos.ToDoListRecordDTO;
import com.mchalet.todoapp.model.ToDoListModel;
import com.mchalet.todoapp.service.ToDoListService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ToDoListController {
	
	@Autowired
    ToDoListService toDoListService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/lists/create")
    public ResponseEntity<ToDoListModel> createToDoList(@RequestBody @Valid ToDoListRecordDTO todoListRecordDTO) {
        return toDoListService.createToDoList(todoListRecordDTO);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/lists")
    public ResponseEntity<List<ToDoListModel>> getAllToDoLists() {
        return toDoListService.getAllToDoLists();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/lists/{id}")
    public ResponseEntity<Object> getOneList(@PathVariable Integer id) {
        return toDoListService.getOneList(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/lists/update/{id}")
    public ResponseEntity<Object> updateToDoList(@PathVariable Integer id,
                                                 @RequestBody @Valid ToDoListRecordDTO toDoListRecordDTO) {
        return toDoListService.updateToDoList(id, toDoListRecordDTO);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/lists/delete/{id}")
    public ResponseEntity<String> deleteToDoList(@PathVariable Integer id) {
        return toDoListService.deleteToDoList(id);
    }
}
