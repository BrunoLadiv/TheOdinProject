import React from 'react'

// const initialState = {
//   personalDetails: {
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   },
//   education: {
//     school: '',
//     degree: '',
//     startDate: '',
//     endDate: '',
//     location: '',
//   },
//   techSkills: '',
//   experience: {
//     companyName: '',
//     positionTitle: '',
//     startDate: '',
//     endDate: '',
//   },
//   educationArray: [],
//   experienceArray: [],
// }
const initialState = {
  personalDetails: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, Cityville',
  },
  education: {
    school: 'University of Fiction',
    degree: 'Bachelor of Science in Fictional Studies',
    startDate: '2015-09-01',
    endDate: '2019-05-31',
    location: 'Cityville',
  },
  techSkills: 'JavaScript, React, Node.js',
  experience: {
    companyName: 'Tech Co.',
    positionTitle: 'Software Engineer',
    startDate: '2019-06-01',
    endDate: '2022-12-31',
  },
  educationArray: [
    {
      id: '53252352',
      school: 'High School of Fiction',
      degree: 'High School Diploma',
      startDate: '2011-09-01',
      endDate: '2015-05-31',
      location: 'Cityville',
    },
    {
      id: '5325235',
      school: 'Fictional Coding Bootcamp',
      degree: 'Coding Certificate',
      startDate: '2019-01-01',
      endDate: '2019-03-31',
      location: 'Tech City',
    },
  ],
  experienceArray: [
    {
      id: '3442432',
      companyName: 'Code Innovators',
      positionTitle: 'Junior Developer',
      startDate: '2020-01-01',
      endDate: '2021-06-30',
    },
    {
      id: '52352352',
      companyName: 'Tech Solutions Ltd.',
      positionTitle: 'Senior Developer',
      startDate: '2022-01-01',
      endDate: '2023-12-31',
    },
  ],
};

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
            educationArray: [],
          }
        case 'experience':
          return {
            ...resumeState,
            experience: initialState.experience,
            experienceArray: [],
          }
        default:
          return resumeState
      }
    case 'SAVE':
      switch (action.payload) {
        case 'education':
          return {
            ...resumeState,
            educationArray: [
              ...resumeState.educationArray,
              {
                ...resumeState.education,
                id: crypto.randomUUID(),
              },
            ],
            education: initialState.education,
          }
        case 'experience':
          return {
            ...resumeState,
            experienceArray: [
              ...resumeState.experienceArray,
              {
                ...resumeState.experience,
                id: crypto.randomUUID(),
              },
            ],
            experience: initialState.experience,
          }

        default:
          return resumeState
      }

    case 'EDIT':
      switch (action.change) {
        case 'EDUCATION': {
          const updatedEducationArray = resumeState.educationArray.map(
            (item) => {
              if (item.id === action.payload.id) {
                return {
                  ...item,
                  ...action.payload,
                }
              }
              return item
            }
          )

          return {
            ...resumeState,
            educationArray: updatedEducationArray,
          }
        }
        case 'EXPERIENCE': {
          const updatedExperienceArray = resumeState.experienceArray.map(
            (item) => {
              if (item.id === action.payload.id) {
                return {
                  ...item,
                  ...action.payload,
                }
              }
              return item
            }
          )

          return {
            ...resumeState,
            experienceArray: updatedExperienceArray,
          }
        }

        default:
          return resumeState
      }
    case 'DELETE':
      switch (action.payload) {
        case 'EDUCATION': {
          const idToDelete = action.id

          const updatedEducationArray = resumeState.educationArray.filter(
            (item) => item.id !== idToDelete
          )

          return {
            ...resumeState,
            educationArray: updatedEducationArray,
          }
        }
        case 'EXPERIENCE':{
          const idToDelete = action.id

          const updatedEperienceArray = resumeState.experienceArray.filter(
            (item) => item.id !== idToDelete
          )

          return {
            ...resumeState,
            experienceArray: updatedEperienceArray,
          }
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
