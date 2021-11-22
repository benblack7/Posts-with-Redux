import React, { useState } from 'react'
import './styles.css';


const Form = () => {
  const[heading, setHeading] = useState('')
  const[subHeading, setSubHeading] = useState('')
  const[summary, setSummary] = useState('')

  const onHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => setHeading(e.target.value)
  const onSubHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => setSubHeading(e.target.value)
  const onSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=> setSummary(e.target.value)

  return (
    <React.Fragment>
      <form id="msform">
        <fieldset>
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
          onChange={onSummaryChange}
          value={summary}
          placeholder="Summary"
          />
          <input type="button" name="Submit" value="Submit" />
        </fieldset>
      </form>
    </React.Fragment>
  )
}

export default Form;