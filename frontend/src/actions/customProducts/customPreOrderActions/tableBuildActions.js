import axios from 'axios'
import {
  SIZE_ADD,
  SPECIES_ADD,
  SPECIES_TOTAL_ADD,
  STAIN_ADD,
  PAINT_ADD,
  BASE_ADD,
  STAIN_TOTAL_ADD,
  PAINT_TOTAL_ADD,
  BASE_TOTAL_ADD,
  ALL_RESET,
  // SPECIES_TOTAL_ADD,
} from '../../../constants/customPreOrderConstants/customBuildConstants'

export const resetAll = () => async dispatch => {
  localStorage.removeItem('size')
  localStorage.removeItem('species')
  localStorage.removeItem('speciesTotal')
  localStorage.removeItem('stain')
  localStorage.removeItem('stainTotal')
  localStorage.removeItem('paint')
  localStorage.removeItem('paintTotal')
  localStorage.removeItem('base')
  localStorage.removeItem('baseTotal')
  dispatch({
    type: ALL_RESET,
  })
}

export const addSize = size => async dispatch => {
  dispatch({
    type: SIZE_ADD,
    payload: size,
  })

  localStorage.setItem('size', JSON.stringify(size))
}

export const addSpecies = id => async dispatch => {
  const { data } = await axios.get(`/api/custom/table/${id}`)

  dispatch({
    type: SPECIES_ADD,
    payload: data,
  })

  localStorage.setItem('species', JSON.stringify(data))
}

export const addSpeciesTotal = total => dispatch => {
  dispatch({
    type: SPECIES_TOTAL_ADD,
    payload: total,
  })

  localStorage.setItem('speciesTotal', JSON.stringify(total))
}

export const addStain = id => async dispatch => {
  const { data } = await axios.get(`/api/custom/stain/${id}`)

  dispatch({
    type: STAIN_ADD,
    payload: data,
  })

  localStorage.setItem('stain', JSON.stringify(data))
}

export const addStainTotal = total => async dispatch => {
  dispatch({
    type: STAIN_TOTAL_ADD,
    payload: total,
  })

  localStorage.setItem('stainTotal', JSON.stringify(total))
}

export const addPaint = id => async dispatch => {
  const { data } = await axios.get(`/api/custom/paint/${id}`)

  dispatch({
    type: PAINT_ADD,
    payload: data,
  })

  localStorage.setItem('paint', JSON.stringify(data))
}

export const addPaintTotal = total => async (dispatch, getState) => {
  dispatch({
    type: PAINT_TOTAL_ADD,
    payload: total,
  })

  localStorage.setItem('paintTotal', JSON.stringify(total))
}

export const addBase = id => async dispatch => {
  const { data } = await axios.get(`/api/custom/base/${id}`)

  dispatch({
    type: BASE_ADD,
    payload: data,
  })

  localStorage.setItem('base', JSON.stringify(data))
}

export const addBaseTotal = total => async (dispatch, getState) => {
  dispatch({
    type: BASE_TOTAL_ADD,
    payload: total,
  })

  localStorage.setItem('baseTotal', JSON.stringify(total))
}
