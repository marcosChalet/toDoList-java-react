package com.mchalet.todoapp.dtos;

import jakarta.validation.constraints.NotBlank;

public record ToDoItemRecordDTO(@NotBlank String toDo) { }
