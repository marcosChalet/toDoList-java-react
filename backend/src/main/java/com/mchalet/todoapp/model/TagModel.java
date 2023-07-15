package com.mchalet.todoapp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "TAGS")
public class TagModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    String name;
}
