package com.mchalet.todoapp.dtos;

import jakarta.validation.constraints.NotBlank;

public record TodoListRecordDTO(@NotBlank String title) { }
