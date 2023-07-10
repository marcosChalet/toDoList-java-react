package com.mchalet.todoapp.dtos;

import jakarta.validation.constraints.NotBlank;

public record TodoItemRecordDTO(@NotBlank String todo) { }
