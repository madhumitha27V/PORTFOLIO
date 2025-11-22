import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 90, icon: "fas fa-code" },
        { name: "Python", level: 70, icon: "fab fa-python" },
        { name: "Java", level: 70, icon: "fab fa-java" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 95, icon: "fab fa-html5" },
        { name: "CSS", level: 90, icon: "fab fa-css3-alt" },
        { name: "React.js", level: 85, icon: "fab fa-react" },
        { name: "Node.js", level: 80, icon: "fab fa-node-js" }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85, icon: "fas fa-database" },
        { name: "Git", level: 90, icon: "fab fa-git-alt" },
        { name: "GitHub", level: 90, icon: "fab fa-github" }
      ]
    },
    {
      title: "Core Technologies",
      skills: [
        { name: "Data Structures", level: 85, icon: "fas fa-project-diagram" },
        { name: "Algorithms", level: 80, icon: "fas fa-cogs" },
        { name: "IoT", level: 70, icon: "fas fa-microchip" }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
          <p>My technical skills that I've developed through coursework, practice and projects.</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <i className={skill.icon}></i>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;