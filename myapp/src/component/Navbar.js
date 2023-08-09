import React from 'react'

export default function Menu() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" id="banner">React Portfolio
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAzRJREFUSEvF1knMnlMUB/Bf1VAxVQ2RIER0o5LGQkKQaEoshLCgxFRNWyU0EvNUVRbGkmAhQkuMC4m0IdEmLLoxW4ggsZGwqCGGEPOQf3Oe5Obxvu/3fl8b31k9z73n3v85/zPdGaZJZkwTru0BPhW/YstUjJ8K8L54FOcX4HpcjR8mY8BkgRfhYRzQA/kKS/DKuODjAh+Ix3FmXRzwq/AHnsCKWn+h1r+ZyIBxgC/FWszGZ1iMN/EnfsMsnIyncSgCuhLPjwIfBXxIXbYAf+Mh3FIJtXN5+zt2K4A9cC8uZ1vSbsJFSBj+I4OAs3YF7sae+BSX4K3m9CDgbvsEPIPD8T2uwZN95D7wEXgWx+Ev3I9ViGetjAKO3u64B1eW92/gYnzRXdICn4YN2BUfl+K7Q+J0DN4v447GJ0P0TsQ6HImfsBBvR7cFXo3b64IAp3Q+7F04EzcgurvUXprIzZUD//T0jy0G59Z6ziYPhgJnL1kbmkNZkithSOyOb0oqCZX6jYTOJNOXSChyNsm4U2PM9bhvGHBqNGVxVh1I6byENRW7rRWGZG0keqnlOfgRtyIlmHBEnsPPWIaBwKE5FMbSO3EeHsF+jcUb69Jve5QeVGwkhp3EwOWVN6mQ0DyS6hgQ7wIc7/dvLgud8ebzHnDCkJ59UrP+NZZOBjhgaR5n1yWv42Xchb2rgdxW3SzJeWOxlGpI3Wbv3MaI5EWovmwY1W1WBzN0ZurkYCT9OtSfU//vVMxTTpF4fF21zPwnpsngtNpOBlLdxThKr+JCfNejNL+n4zEcXHuhPSCbB+jG2Berl2f7WjyQj7aOT0GSJ00/zb+rzZRSX+JFjMp02ge/DNBJSQUo+ZKaTwNJR/yoD5z/w5DRFoVI+nM8z1RqZaKWOa8ax/w6NLJldheHhczXNI69KplSYqGo834YcNbDVBpHl2xjDYnWq3YsZv09XFDTahBwvHsKnZeTHov9cGUkPoi8tRL7O2pqZWLlP6ykhG6qVrndD4HWgP7T54NqiRmdmddHlXJGakpwhzx9WgPSGFLL/9tjrwWfludta8AZ9TJ5bUANT7g0zitzwkumojBtwP8Clp7CH25lRdoAAAAASUVORK5CYII="/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#banner">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#carouselExampleCaptions">Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#foot">AboutUS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Week
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#w1">Tasks</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


;
}


