package dev.alexisdetrie.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity : represents education details
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class EducationItem extends PanacheMongoEntity {

    @Getter @Setter
    private String school;

    @Getter @Setter
    private String titre;

    @Getter @Setter
    private int startYear;

    @Getter @Setter
    private int endYear;
}