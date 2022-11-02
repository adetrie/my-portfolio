package dev.alexisdetrie.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Entity : represents an education
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class Education extends PanacheMongoEntity {

    @Getter @Setter
    private String id;

    @Getter @Setter
    List<EducationItem> educationItems;

    public Education(List<EducationItem> educationItems) {
        this.educationItems = educationItems;
    }


}
