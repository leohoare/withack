import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Collapse, Tooltip, Menu } from 'antd';

const { Panel } = Collapse;

class PointComponent extends Component 
{

  render() {
    const point = require('./point.png');
    return (
      <div style={{width:'30px', height:'25px'}}>
        <Tooltip title={this.props.text}>
          <img style={{width:'30px', height:'25px'}} src={point} onClick={this.props.onClick}/> 
        </Tooltip>,
      </div>
    )
  }
} 


class SimpleMap extends Component {
  state = {
    activeKey: [],
    page: ['Home']
  };

  static defaultProps = {
    center: {
      lat: -33.872517,
      lng: 151.207600,
    },
    zoom: 14
  };
 
  callback = (key) => {
    const keys = this.state.activeKey;
    if (keys.includes(`${key}`) ) {
      for(var i = keys.length - 1; i >= 0; i--) {
        if(keys[i] === `${key}`) {
          keys.splice(i, 1);
        }
      }
      this.setState({activeKey: keys});
    } else {
      keys.push(`${key}`);
      this.setState({activeKey: keys});
    }
  };

  changePage = e => {
    console.log(this.state);    
    this.setState({page: [e.key]});
    console.log(this.state);
};
  

  render() {
    const wecare = require('./wecare.png');

    return (
      this.state.page[0] === 'Home' ? 

      <div style={{height:'100vh', widht:'100vw'}}>
          <Menu onClick={this.changePage} selectedKeys={this.state.page}
          mode='horizontal'>
          <Menu.Item disabled title="Icon" style={{float:'left'}}>
            <img style={{width:'150px', height:'40px'}} src={wecare} />           
          </Menu.Item>
          <Menu.Item key='Home' style={{float:'left'}}>
              User
          </Menu.Item>
          <Menu.Item key='' style={{float:'left'}} >
              Healthcare Worker
          </Menu.Item>
        </Menu>
        <iframe
        title="wit"
        allow="microphone;"
        width="90%"
        height="80%"
        src="https://console.dialogflow.com/api-client/demo/embedded/efc8c740-f7b4-42ed-9eb5-adbb0134e3b8"
        style={{margin:'20px'}}
        />
      </div> :
            <div>
            <Menu onClick={this.changePage} selectedKeys={this.state.page}
            mode='horizontal'>
            <Menu.Item disabled title="Icon" style={{float:'left'}}>
              <img style={{width:'150px', height:'40px'}} src={wecare} />           
            </Menu.Item>
            <Menu.Item key='Home' style={{float:'left'}}>
                User
            </Menu.Item>
            <Menu.Item key='' style={{float:'left'}} >
                Healthcare Worker
            </Menu.Item>
          </Menu>
         <div style={{ float:'left', height: '90vh', width: '60%', padding:'20px'}}>
           <GoogleMapReact
             bootstrapURLKeys={{ key: 'AIzaSyAL6TJWfyItwAjsArphE0ThCOCP76yariY' }}
             defaultCenter={this.props.center}
             defaultZoom={this.props.zoom}
           >
           {tooltips.map( (example, index) => <PointComponent key={index} 
           text={example['text']} 
           lng={example['lng']} 
           lat={example['lat']} 
           onClick={() => this.callback(index)} />)}
           </GoogleMapReact>
 
         </div>
         <div style={{width:'40%', float:'right', padding:'20px'}}>
           <Collapse activeKey={this.state.activeKey} onChange={this.callback} >
             {tooltips.map( (example, index) => 
               <Panel header={example['text']} key={index}  >
                 {example['fullinfo'].map(field => 
                  <div><h4 style={{display:'inline'}}>{field[0]}</h4> <body style={{display:'inline'}}> - {field[1]}</body> <br/></div>)}
               </Panel>
             )}
           </Collapse>
         </div>
       </div> 

    );
  }
}

const tooltips = [
  // {
    // -33.859541,
    // lng: 151.208228,
  //   lat: -33.872517,
  //   lng: 151.207600,
  //   text: 'Shopping request',
  //   fullinfo: 'abdsfhbasdjhfnasd fjhasdfhabsdfjhabsdf',
  // },
  {
    lat: -33.872517,
    lng: 151.207600,
    text: 'example 2',
    fullinfo: [ ['Name','Homer Simpson'],
                ['Gender','Male'],
                ['Age', '58'],
                ['Location','2 Park St, Sydney NSW 2000'],
                ['Problem','Fallen and needs assistance'],
  ],
  },
  {
    lat: -33.875190,
    lng: 151.199848,
    text: 'Experienced a fall and needs assistance',
    fullinfo: [ ['Name','Georgia Smith'],
                ['Location','14 Darling Dr, Sydney NSW 2000'],
                ['Gender','Female'],
                ['Problem','Fallen and needs assistance'],
              ]
  },

  
]


 
export default SimpleMap;