package dev.alexisdetrie.configuration;

import dev.alexisdetrie.domain.*;
import io.quarkus.runtime.StartupEvent;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import javax.enterprise.event.Observes;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


/**
 * Load default data when application is <b>started</b>
 *
 * @author Alexis
 * @since 1.0.0
 */
@AllArgsConstructor
@Slf4j
public class InitialDBInsert {

    void onStart(@Observes StartupEvent ev) {
        log.info("The application is starting...");
        log.info("Starting InitialDBInsert");
        log.info("Removing existing data");
        User.deleteAll();

        log.info("Create default data");
        List<ArchitectureExperience> architectureExperiences = getArchitectureExperiences();
        List<DeveloperExperience> developerExperiences = getDeveloperExperiences();
        List<Skill> skills = getSkills();

        List<Education> educations = getEducations();
        User me = new User("Alexis", "Détrie", true, architectureExperiences, developerExperiences, educations, skills);
        User.persist(me);


        // fetch all customers
        log.info("User found with findAll():");
        log.info("-------------------------------");
        User.findAll().stream().forEach(user -> log.info(user.toString()));
        log.info("End InitialDBInsert");

    }


    private ArrayList<Skill> getSkills() {
        ArrayList<Skill> skills = new ArrayList<>();

        SkillCategory programming = new SkillCategory("Programmation", "#ffd53d", 0);
        SkillCategory ide = new SkillCategory("IDE", "#48cb8a", 4);
        SkillCategory devSecOps = new SkillCategory("DevSecOps", "#f25c54", 1);
        SkillCategory versioning = new SkillCategory("Versioning", "#ffd53d", 3);
        SkillCategory security = new SkillCategory("Sécurité", "#48cb8a", 2);

        skills.add(new Skill("Java", 85, "java", "#E62E33", programming));
        skills.add(new Skill("JavaScript", 50, "javascript", "#efd81c", programming));
        skills.add(new Skill("React JS", 50, "reactjs", "#6ad3f3", programming));
        skills.add(new Skill("HTML/CSS", 70, "html", "#dd4b29", programming));
        skills.add(new Skill("Spring / Spring Boot", 75, "spring", "#73b61e", programming));
        skills.add(new Skill("Java EE / Jakarta", 70, "java", "#f1b33d", programming));
        skills.add(new Skill("IntelliJ IDEA", 80, "intellij", "#000000", ide));
        skills.add(new Skill("Eclipse", 70, "eclipse", "#2b2152", ide));
        skills.add(new Skill("Maven", 85, "maven", "#d12933", programming));
        skills.add(new Skill("CI / CD", 85, "cicd", "#3b74d0", devSecOps));
        skills.add(new Skill("Git", 70, "git", "#e74e31", versioning));
        skills.add(new Skill("SVN", 65, "svn", "#9cb7d8", versioning));
        skills.add(new Skill("CVS", 50, "cvs", "#05015f", versioning));
        skills.add(new Skill("Docker", 60, "docker", "#4a92e6", devSecOps));
        skills.add(new Skill("Kubernetes", 30, "k8s", "#386adf", devSecOps));
        skills.add(new Skill("OAuth 2 / OpenID Connect", 60, "oauth2", "#000000", security));
        skills.add(new Skill("SAML 2", 40, "saml", "#bb262c", security));

        return skills;
    }

    private List<Education> getEducations() {
        List<Education> educations = new ArrayList<>();
        List<EducationItem> educationItems = new ArrayList<>();
        educationItems.add(new EducationItem("Supinfo Metz", "5ième année du cycle ingénierie (BAC +5)", 2009, 2011));
        educationItems.add(new EducationItem("eXia.cesi Nancy", "Responsable en ingénierie des logiciels (BAC +4)", 2007, 2009));
        educationItems.add(new EducationItem("BTS informatique de gestion ", "Option développeur d’applications (BAC +2)", 2005, 2007));
        educations.add(new Education(educationItems));
        return educations;
    }

    private List<DeveloperExperience> getDeveloperExperiences() {
        List<DeveloperExperience> developerExperiences = new ArrayList<>();
        developerExperiences.add(dpDeveloperExperience());
        developerExperiences.add(pwcDeveloperExperience());
        developerExperiences.add(ctgDeveloperExperience());
        developerExperiences.add(neopixlDeveloperExperience());
        developerExperiences.add(sogetiDeveloperExperience());

        return developerExperiences;
    }

    private DeveloperExperience dpDeveloperExperience() {
        ArrayList<ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new ExperienceItem("Interne", "Java 11, Spring Boot, Talend, Flex, Linux ", "computer"));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer")
                .company("Banque Degroof Petercam Luxembourg")
                .startDate(LocalDate.of(2021, 8, 1))
                .endDate(LocalDate.of(2022, 6, 1))
                .experienceItems(experienceItems)
                .icon("bank")
                .build();

        return developerExperience;
    }

    private DeveloperExperience pwcDeveloperExperience() {
        ArrayList<ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new ExperienceItem("Interne", "Java/JEE, Eclipse (RAD), WebSphere 8, Oracle DB, EJB 2, EJB 3, Hibernate, Struts 2, Tiles, SOAP, REST, jQuery, comptabilité, LuxTrust.", "graph"));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer ")
                .company("PricewaterhouseCoopers Luxembourg")
                .startDate(LocalDate.of(2015, 5, 1))
                .endDate(LocalDate.of(2016, 9, 1))
                .experienceItems(experienceItems)
                .icon("service")
                .build();

        return developerExperience;
    }

    private DeveloperExperience ctgDeveloperExperience() {
        ArrayList<ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new ExperienceItem("Spuerkeess", "Java/JEE, Eclipse (RAD), WebSphere 8, DB2, CICS, ANT, CVS, SOAP", "bank"));
        experienceItems.add(new ExperienceItem("Chambre de Commerce Luxembourg", "JEE 6, EJB 3.1, GlassFish, Oracle DB, Primefaces/JSF, Maven, Git, Eclipse", "cdc"));
        experienceItems.add(new ExperienceItem("Interne", "JEE 6, EJB 3.1, GlassFish, MySQL, Primefaces/JSF, Maven, Git, Eclipse", "fatca"));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer")
                .company("CTG")
                .startDate(LocalDate.of(2013, 8, 1))
                .endDate(LocalDate.of(2015, 5, 1))
                .experienceItems(experienceItems)
                .icon("computer")
                .build();

        return developerExperience;
    }

    private DeveloperExperience neopixlDeveloperExperience() {
        ArrayList<ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new ExperienceItem("PushPixl", "Push notification, SAAS, Tomcat, Spring, REST, MySQL, Hibernate, jUnit, Jenkins, Maven, Git, Eclipse, MacOs.", "push"));
        experienceItems.add(new ExperienceItem("Wort", "Push notification, Android, Maven, Git, Eclipse, MacOs.", "wort"));
        experienceItems.add(new ExperienceItem("Forem (BE)", "Formateur, Android.", "android"));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java back end and mobile developer")
                .company("Neopixl")
                .startDate(LocalDate.of(2013, 1, 1))
                .endDate(LocalDate.of(2013, 7, 1))
                .experienceItems(experienceItems)
                .icon("rocket")
                .build();

        return developerExperience;
    }

    private DeveloperExperience sogetiDeveloperExperience() {
        ArrayList<ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new ExperienceItem("Adem", "JEE, Mainframe IBM, CTIE, JEE6, OpenJPA, EJB 3, Struts, HTML, jQuery, jUnit, Sélénium, Jenkins, WebSphere 8, DB2.", "work"));

        DeveloperExperience developerExperience = DeveloperExperience.builder()
                .jobTitle("Java developer")
                .company("Capgemini Sogeti Luxembourg")
                .startDate(LocalDate.of(2011, 10, 1))
                .endDate(LocalDate.of(2013, 1, 1))
                .experienceItems(experienceItems)
                .icon("computer")
                .build();

        return developerExperience;
    }


    private List<ArchitectureExperience> getArchitectureExperiences() {
        ArrayList<ExperienceItem> experienceItems = new ArrayList<>();
        experienceItems.add(new ExperienceItem("Interne", "Réalisation d’un framework basé sur Spring/Spring Boot", "spring"));
        experienceItems.add(new ExperienceItem("Interne", "Guidelines et migration d’applications WebSphere 8 vers WebSphere 9", "ibm"));
        experienceItems.add(new ExperienceItem("Interne", "Guidelines et migration d’applications sur Maven", "maven"));
        experienceItems.add(new ExperienceItem("Interne", "Guidelines et migration d’applications sur TFS/Azure DevOps", "cicd"));
        experienceItems.add(new ExperienceItem("Interne", "Participation à la mise en place de SSDLC", "oauth2"));
        experienceItems.add(new ExperienceItem("Interne", "Participation à la migration de JVM Oracle vers JVM Azul", "java"));
        experienceItems.add(new ExperienceItem("Interne", "Mise en place d’authentifications « modernes » (OAuth 2 / SAML)", "security"));
        experienceItems.add(new ExperienceItem("Interne", "Mise en place de Kubernetes / Docker pour les applications Java", "docker"));
        experienceItems.add(new ExperienceItem("Interne", "Animation de la communauté Java à Luxembourg", "teacher"));
        experienceItems.add(new ExperienceItem("Interne", "Support / Formation / Facilitateur", "support"));

        ArchitectureExperience architectureExperience = ArchitectureExperience.builder()
                .jobTitle("IT Solution Architect")
                .company("PricewaterhouseCoopers Luxembourg")
                .startDate(LocalDate.of(2016, 9, 1))
                .endDate(LocalDate.of(2021, 8, 15))
                .experienceItems(experienceItems)
                .icon("service")
                .build();

        List<ArchitectureExperience> architectureExperiences = List.of(architectureExperience);
        return architectureExperiences;
    }
}
