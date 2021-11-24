import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
//nanoid is built into the toolkit to create random strings
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from '../../redux';

import './styles.css';


const Form = () => {
  //Added Hooks to change Form to a controlled component
  const [heading, setHeading] = useState('')
  const [subHeading, setSubHeading] = useState('')
  const [summary, setSummary] = useState('')

  const dispatch = useDispatch()

  //setting hooks state on form changes
  const onHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeading(e.target.value)
  const onSubHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => setSubHeading(e.target.value)
  const onSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)


  const onSubmit = () => {
    //if all fields are filled out, trigger a dispatch
    if (heading && subHeading && summary) {
      //call dispatch to trigger an action
      dispatch(
        postAdded({
          id: nanoid(),
          heading,
          subHeading,
          summary
        })
      )
      //reset all fields
      setHeading('')
      setSubHeading('')
      setSummary('')
    }
    else {
      alert("Input Field cannot be empty")
    }
  }

  return (
    <React.Fragment>
      <form id="msform">
        <fieldset className="container">
          <h2>Create Post</h2>
          <h3>Fill the all mention detail to submit the form</h3>
          <input
            onChange={onHeadingChange}
            type="text"
            name="heading"
            value={heading}
            placeholder="Heading"
          />
          <input
            onChange={onSubHeadingChange}
            type="text"
            name="pass"
            value={subHeading}
            placeholder="Sub-Heading"
          />
          <textarea
            className="text"
            onChange={onSummaryChange}
            value={summary}
            placeholder="Summary"
          />
          <input
            className="button"
            type="button"
            name="Submit"
            value="Submit"
            onClick={onSubmit}
          />
        </fieldset>
      </form>
    </React.Fragment>
  )
}

export default Form;