import axios from 'axios';
import React, { useState } from 'react';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/moqyqozl',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <div className={styles.container}>
        <div className={styles.submitMessage}>
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
        <form className={styles.form} onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
            <input
            id="name"
            type="text"
            onChange={handleOnChange}
            required
            value={inputs.name}
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            />
            <label htmlFor="message">Message</label>
            <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            />
            <Button type="submit" disabled={status.submitting}>
            {!status.submitting
                ? !status.submitted
                ? 'Submit'
                : 'Submitted'
                : 'Submitting...'}
            </Button>
        </form>
    </div>
  )
}