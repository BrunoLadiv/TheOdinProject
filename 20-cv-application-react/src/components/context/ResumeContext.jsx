import React from 'react'

const initialState = {
  personalDetails: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  education: {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  },
  techSkills: '',
  experience: {
    companyName: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
  },
  educationArray: [],
  experienceArray: []
}



function reducer(resumeState, action) {
  switch (action.type) {
    case 'UPDATE_PERSONAL':
      return {
        ...resumeState,
        personalDetails: {
          ...resumeState.personalDetails,
          ...action.payload,
        },
      }
    case 'UPDATE_EDUCATION':
      return {
        ...resumeState,
        education: {
          ...resumeState.education,
          ...action.payload,
        },
      }
    case 'UPDATE_TECH':
      return {
        ...resumeState,
        techSkills: action.payload,
      }
    case 'UPDATE_EXPERIENCE':
      return {
        ...resumeState,
        experience: {
          ...resumeState.experience,
          ...action.payload,
        },
      }
    
    case 'RESET':
      switch (action.payload) {
        case 'education':
          
          return {
            ...resumeState,
            education: initialState.education,
            educationArray: []
          }
        case 'experience':
          return {
            ...resumeState,
            experience: initialState.experience,
            experienceArray: []
          }
        default:
          return resumeState
      }
    case 'SAVE':
      switch (action.payload) {
        case 'education':
          
          return {
            ...resumeState,
            educationArray: [...resumeState.educationArray, {
              ...resumeState.education
            } ], education: initialState.education
          }
        case 'experience':
          return {
            ...resumeState,
            experienceArray: [...resumeState.experienceArray, {
              ...resumeState.experience
            } ], experience: initialState.experience
          }
        
      
        default:
          return resumeState
      }

    default:
      return resumeState
  }
}

export const ResumeContext = React.createContext()

export function ResumeContextProvider({ children }) {
  const [resumeState, dispatch] = React.useReducer(reducer, initialState)
  console.log(resumeState)

  return (
    <ResumeContext.Provider value={{ resumeState, dispatch }}>
      {children}
    </ResumeContext.Provider>
  )
}
