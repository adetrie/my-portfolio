package dev.alexisdetrie.domain;

import io.quarkus.mongodb.panache.PanacheMongoEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;
/**
 * Abstract Entity : default properties for @{@link ArchitectureExperience} and @{@link DeveloperExperience}
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@NoArgsConstructor
public abstract class Experience extends PanacheMongoEntity {

    @Getter @Setter
    private String id;

    @Getter @Setter
    private String jobTitle;

    @Getter @Setter
    private String company;

    @Getter @Setter
    private String icon;

    @Getter @Setter
    private LocalDate startDate;

    @Getter @Setter
    private LocalDate endDate;

    @Getter @Setter
    private List<ExperienceItem> experienceItems;


}
