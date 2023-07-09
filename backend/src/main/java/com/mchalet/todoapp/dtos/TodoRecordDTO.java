package com.mchalet.todoapp.dtos;

import jakarta.validation.constraints.NotBlank;

public record TodoRecordDTO(@NotBlank String title) { }
