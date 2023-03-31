import React from 'react'

class MFApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getData() {
    setTimeout(() => {
      console.log('Our data is fetched')
      this.setState({
        data: (
          <div id="mform">
            <div
              id="mf_placeholder"
              data-formurl="https://z33design.forms-db.com/embed.php?id=23314"
              data-formheight="5163"
              data-formtitle="2023 Little Eagle Football & Cheer Registration"
              data-paddingbottom="10"
            />
            <script>
              {(function(f, o, r, m) {
                r = f.createElement('script')
                r.async = 1
                r.src = o + 'js/mf.js'
                m = f.getElementById('mf_placeholder')
                document.getElementsByTagName('body')[0].insertBefore(r, m)
              })(document, 'https://assets.forms-db.com/')}
            </script>
          </div>
        ),
      })
    }, 10)
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return <div>{this.state.data}</div>
  }
}

export default MFApp
