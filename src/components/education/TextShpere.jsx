import React ,{useEffect} from 'react'
 import './textShpere.css'

 import  TagCloud  from "TagCloud";

const TextShpere = () => {
    useEffect(() => {
        return () => {
                        const container =".tagcloud"
                        const texts=[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Bootstrap",
                        "GitHub"
                    ];
                    const options={
                        radus:300,
                        maxSpeed:"normal",
                        initSpeed:"normal",
                        keep:true,
                    };
                    TagCloud(container,texts,options)
        };
    }, [])
  return (
    <section className="text-shpere">
         <span className="tagcloud"></span>
    </section>
  )
}

export default TextShpere
