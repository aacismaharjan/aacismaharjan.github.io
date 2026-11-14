import React, { useEffect } from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { useState } from "react"
import portfolios from "../constant/portfolio";

const Portfolio = () => {
  const [count, setCount] = useState(9)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(portfolios.slice(0, count))
  }, [count])

  return (
    <Section id="portfolio" title="Selected projects">
      <p className="section-intro">Full-stack products, independent experiments and the projects that put learning into practice.</p>
      <div className="cards">
        {items && items.map((card, index) => <Card card={card} key={index} />)}
      </div>

      <div className="d-flex justify-content-center">
        {count < portfolios.length && (
          <button
            type="button"
            className="btn btn-primary mt-5 btn-lg"
            onClick={() => setCount(count + 3)}
          >
            See more
          </button>
        )}
      </div>
    </Section>
  )
}

export default Portfolio;
