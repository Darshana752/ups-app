package com.example.ups;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UpsRepository extends JpaRepository<UpsEntry, Long> {}
