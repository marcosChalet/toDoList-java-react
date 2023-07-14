package com.mchalet.todoapp.dtos;

import com.mchalet.todoapp.model.TagModel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record ToDoListRecordDTO(@NotBlank String title,
                                @NotNull Integer toDoType,
                                List<TagModel> tags) { }
