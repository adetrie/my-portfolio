package dev.alexisdetrie.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity : represents a skill category
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class SkillCategory extends PanacheMongoEntity {

    @Getter @Setter
    private String id;

    @Getter @Setter
    private String skillCategoryName;

    @Getter @Setter
    private String color;

    @Getter @Setter
    private int order;

    public SkillCategory(String skillCategoryName, String color, int order) {
        this.skillCategoryName = skillCategoryName;
        this.color = color;
        this.order = order;
    }
}
