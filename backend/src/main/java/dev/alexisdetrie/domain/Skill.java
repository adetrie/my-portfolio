package dev.alexisdetrie.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entity : represents a skill
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public class Skill extends PanacheMongoEntity {

    @Getter @Setter
    private String id;

    @Getter @Setter
    private String skillName;

    @Getter @Setter
    private int skillLevel;

    @Getter @Setter
    private String logo;

    @Getter @Setter
    private String color;

    @Getter @Setter
    private SkillCategory category;

    public Skill(String skillName, int skillLevel, String logo, String color, SkillCategory category) {
        this.skillName = skillName;
        this.skillLevel = skillLevel;
        this.logo = logo;
        this.color = color;
        this.category = category;
    }
}
