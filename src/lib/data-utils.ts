import { projects } from "@/data/ProjectsData"
import { certifications } from "@/data/CertificationsData"
import { skillsData } from "@/data/SkillsData"

export interface ProjectWithCertifications {
  project: typeof projects[0]
  certifications: typeof certifications
}

export interface CertificationWithProjects {
  certification: typeof certifications[0]
  projects: typeof projects
}

// Function to get certifications for a specific project
export function getCertificationsForProject(projectId: string) {
  return certifications.filter(cert => 
    cert.linkedProjects.includes(projectId)
  )
}

// Function to get projects for a specific certification
export function getProjectsForCertification(certificationId: string) {
  return projects.filter(project => 
    project.linkedCertifications.includes(certificationId)
  )
}

// Function to get all projects with their related certifications
export function getAllProjectsWithCertifications(): ProjectWithCertifications[] {
  return projects.map(project => ({
    project,
    certifications: getCertificationsForProject(project.id)
  }))
}

// Function to get all certifications with their related projects
export function getAllCertificationsWithProjects(): CertificationWithProjects[] {
  return certifications.map(certification => ({
    certification,
    projects: getProjectsForCertification(certification.id)
  }))
}

// Function to get related projects for a given project (projects that share certifications)
export function getRelatedProjects(projectId: string) {
  const projectCertifications = getCertificationsForProject(projectId)
  const relatedProjectIds = new Set<string>()
  
  projectCertifications.forEach(cert => {
    cert.linkedProjects.forEach(linkedProjectId => {
      if (linkedProjectId !== projectId) { // Exclude the project itself
        relatedProjectIds.add(linkedProjectId)
      }
    })
  })
  
  return projects.filter(project => relatedProjectIds.has(project.id))
}

// Function to get related certifications for a given certification (certifications that share projects)
export function getRelatedCertifications(certificationId: string) {
  const certificationProjects = getProjectsForCertification(certificationId)
  const relatedCertificationIds = new Set<string>()
  
  certificationProjects.forEach(project => {
    project.linkedCertifications.forEach(certId => {
      if (certId !== certificationId) { // Exclude the certification itself
        relatedCertificationIds.add(certId)
      }
    })
  })
  
  return certifications.filter(cert => relatedCertificationIds.has(cert.id))
}

// Function to get projects for a specific skill
export function getProjectsForSkill(skillId: string) {
  return projects.filter(project => 
    project.linkedSkills?.includes(skillId) || []
  )
}

// Function to get certifications for a specific skill
export function getCertificationsForSkill(skillId: string) {
  return certifications.filter(certification => 
    certification.skills.includes(skillId)
  )
}

// Function to get all skills for a specific project
export function getSkillsForProject(projectId: string) {
  const project = projects.find(p => p.id === projectId)
  if (!project || !project.linkedSkills) return []
  
  const allSkills = skillsData.flatMap(category => category.skills)
  return allSkills.filter(skill => project.linkedSkills?.includes(skill.id))
}

// Function to get all skills for a specific certification
export function getSkillsForCertification(certificationId: string) {
  const certification = certifications.find(c => c.id === certificationId)
  if (!certification) return []
  
  const allSkills = skillsData.flatMap(category => category.skills)
  return allSkills.filter(skill => certification.skills.includes(skill.id))
}

// Function to get all skills with their related projects and certifications
export function getAllSkillsWithRelations() {
  const allSkills = skillsData.flatMap(category => category.skills)
  
  return allSkills.map(skill => ({
    skill,
    projects: getProjectsForSkill(skill.id),
    certifications: getCertificationsForSkill(skill.id)
  }))
}

// Function to get related skills for a given skill (skills that share projects or certifications)
export function getRelatedSkills(skillId: string) {
  const skillProjects = getProjectsForSkill(skillId)
  const skillCertifications = getCertificationsForSkill(skillId)
  const relatedSkillIds = new Set<string>()
  
  // Find skills that share projects
  skillProjects.forEach(project => {
    project.linkedSkills?.forEach(linkedSkillId => {
      if (linkedSkillId !== skillId) { // Exclude the skill itself
        relatedSkillIds.add(linkedSkillId)
      }
    })
  })
  
  // Find skills that share certifications
  skillCertifications.forEach(certification => {
    certification.skills.forEach(linkedSkillId => {
      if (linkedSkillId !== skillId) { // Exclude the skill itself
        relatedSkillIds.add(linkedSkillId)
      }
    })
  })
  
  const allSkills = skillsData.flatMap(category => category.skills)
  return allSkills.filter(skill => relatedSkillIds.has(skill.id))
}