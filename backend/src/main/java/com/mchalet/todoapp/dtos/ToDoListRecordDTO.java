package com.mchalet.todoapp.dtos;

import jakarta.validation.constraints.NotBlank;

public record ToDoListRecordDTO(@NotBlank String title) { }
