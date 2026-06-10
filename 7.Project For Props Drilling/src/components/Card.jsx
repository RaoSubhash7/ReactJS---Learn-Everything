import React from 'react'
import { Bookmark } from 'lucide-react'
function Card() {
  return (
    <>
          <div className="parent">
            <div className="card">
    {/* ------------------------------------------ */}
              <div className="top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82LGte7aW4vSVQKUViGizHcKtt3YvIuzF3kB6hogrpg&s" alt="Amazon" />
                <button>Save <Bookmark /> </button>
              </div>
    {/* ------------------------------------------------- */}
              <div className="center">
                <div>
                  <h3>Amazon <span>5days ago</span></h3>
                  <h2>Senior Software Engineer</h2>
                  <div>
                    <h4>Full Time</h4>
                    <span>Remote</span>
                  </div>
                </div>
              </div>
    {/* --------------------------------------------------------- */}
              <div className="bottom">
                <div>
                  <h3>120$/Hour</h3>
                  <p>Ranchi Jharkhand</p>              
                </div>
                <button>Apply Now</button>
              </div>
    
            </div>
          </div>
        </>
  )
}

export default Card