package com.example.ups;

import jakarta.validation.Valid;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/entries")
@CrossOrigin(origins = "${app.cors.origin}")
public class UpsController {
    private final UpsRepository repo;
    public UpsController(UpsRepository repo) { this.repo = repo; }

    @PostMapping
    public UpsEntry save(@Valid @RequestBody UpsEntry e) { return repo.save(e); }

    @GetMapping
    public List<UpsEntry> all() { return repo.findAll(Sort.by(Sort.Direction.DESC, "id")); }
}
