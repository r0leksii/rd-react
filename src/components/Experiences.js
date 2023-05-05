import { useState } from 'react'
import { Experience } from './Experience'

const experienceData = [
  {
    title: 'CEO',
    date: '2018 - present',
    description: 'Sales and personnel management up to 5 people. Store financial management.',
    company: 'Nuga Best Health Ltd.,Co',
    link: 'https://nugabestbg.com',
  },
  {
    title: 'Sales consultant',
    date: '2015 - 2018',
    description: 'Consulting of South Korean massage equipment. Sales of South Korean massage equipment.',
    company: 'Nuga Best Global Bulgaria Ltd.',
    link: 'https://nugabest.bg',
  },
]

const Experiences = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    company: '',
    link: '',
  })

  const [listData, setListData] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormData({ title: '', date: '', description: '', company: '', link: '' })
    setListData([formData, ...listData])
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <div className="experience">
        <h2>Work Experience</h2>

        {listData.map((item, index) => (
          <Experience key={index} {...item} />
        ))}

        {experienceData.map((item, index) => (
          <Experience key={index} {...item} />
        ))}
      </div>

      <form className="formExpierence" onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="title">Job title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="formItem">
          <label htmlFor="date">Dates of employment:</label>
          <input type="text" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="formItem">
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" value={formData.description} onChange={handleChange} />
        </div>
        <div className="formItem">
          <label htmlFor="company">Name of employer:</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="formItem">
          <label htmlFor="link">Link:</label>
          <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} />
        </div>
        <div className="formButton">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Experiences
