import {Component} from 'react'

import './index.css'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {CgTikcode, CgSun, CgSearch, CgCopy, CgRecord} from 'react-icons/cg'

import {BsChevronDown, BsEnvelopeOpen} from 'react-icons/bs'

import {
  FaRegBell,
  FaAdn,
  FaComment,
  FaEnvelope,
  FaRegCalendarAlt,
} from 'react-icons/fa'

const sideBarList = [
  {
    id: 'Dashboard',
    listNames: ['Analytics', 'CRM', 'Ecommerce', 'Acadmics', 'Logistics'],
  },
  {
    id: 'Font Pages',
    listNames: ['Landing', 'Pricing', 'Payment', 'Checkout', 'Help Centre'],
  },
  {
    id: 'Ecommerce',
    listNames: [
      'Dashboard',
      'Product',
      'Order',
      'Customer',
      'Manage review',
      'Referrals',
      'settings',
    ],
  },
  {
    id: 'Academy',
    listNames: ['Dashboard', 'My Course', 'Course Details'],
  },
  {
    id: 'Logistics',
    listNames: ['Dashboard', 'Fleet'],
  },
  {
    id: 'Dashboard',
    listNames: ['Analytics', 'CRM', 'Ecommerce', 'Acadmics', 'Logistics'],
  },
  {
    id: 'Emails',
  },
  {
    id: 'Chat',
  },
  {
    id: 'Calender',
  },
  {
    id: 'InVoice',
    listNames: ['List', 'preview', 'Edit', 'Add'],
  },
  {
    id: 'User',
    listNames: ['List', 'View'],
  },
  {
    id: 'Roles&Permission',
    listNames: ['Roles', 'Permission'],
  },
  {
    id: 'Pages',
    listNames: [
      'UserProfile',
      'Account Setting',
      'Pricing',
      'FAQ',
      'Miscellaneous',
    ],
  },
  {
    id: 'InVoice',
    listNames: ['List', 'preview', 'Edit', 'Add'],
  },
  {
    id: 'Authentication',
    listNames: [
      'Login',
      'Register',
      'Verify Email',
      'Forgot Password',
      'Reset Password',
      'Two Step',
    ],
  },
  {
    id: 'Wizard Example',
    listNames: ['Checkout', 'PropertyListening', 'Create Deal'],
  },
  {
    id: 'Dialog Example',
  },
  {
    id: 'TypoGraphy',
  },
  {
    id: 'Icons',
  },
  {
    id: 'Cards',
    listNames: ['Basic', 'Advance', 'Static', 'Widgets', 'Action'],
  },
  {
    id: 'Components',
    listNames: [
      'Alert',
      'Avatar',
      'Badge',
      'Button',
      'Chips',
      'Dialogs',
      'Expansion Panel',
      'List,Menu',
      'Pagination',
      'Progress Circle',
      'Progress Linear',
      'Snack Bar',
      'Tabs',
      'TimeLine',
      'Tooltip',
    ],
  },
  {
    id: 'Extension',
    listNames: ['Tour', 'Swiper'],
  },
  {
    id: 'Form Element',
    listNames: [
      'AutoComplete',
      'Checkbox',
      'ComboBox',
      'DateTime Picker',
      'Editer',
      'FileInput',
      'Radio',
      'Custom Input',
      'rage Slider',
      'rating',
      'Select',
      'Slider',
      'Switch',
      'TextArea',
      'TextField',
    ],
  },
  {
    id: 'Form Layout',
  },
  {
    id: 'Form Wizard',
    listNames: ['Numbered', 'Icons'],
  },
  {
    id: 'Form validation',
  },
  {
    id: 'Tables',
    listNames: ['Simple Table', 'Data Table'],
  },
  {
    id: 'Charts',
    listNames: ['ApexCharts', 'Chartjs'],
  },
  {
    id: 'Access Control',
  },
  {
    id: 'Nav Levels',
    listNames: ['Level 2.1', 'Level 2.2'],
  },
  {
    id: 'Raise Supports',
  },
  {
    id: 'Documentation',
  },
]

const overlayStyles = {
  backgroundColor: '#ffff',
}

class Header extends Component {
  state = {
    initialList: sideBarList,
    isShowFontPages: false,
    isShowDashBoard: false,
    isShowEcommerce: false,
    isShowAcademy: false,
    isShowLogistics: false,
    isShowInVoice: false,
    isShowUser: false,
    isShowRolesPermission: false,
    isShowPages: false,
    isShowAuthentication: false,
    isShowWizardExample: false,
    isShowCards: false,
    isShowComponents: false,
    isShowExtension: false,
    isShowFormElements: false,
    isShowFormWizard: false,
    isShowTables: false,
    isShowCharts: false,
    isShowNavLevels: false,
  }

  showDashBoard = () => {
    this.setState(prevState => ({isShowDashBoard: !prevState.isShowDashBoard}))
  }

  showFontPages = () => {
    this.setState(prevState => ({isShowFontPages: !prevState.isShowFontPages}))
  }

  showEcommerce = () => {
    this.setState(prevState => ({isShowEcommerce: !prevState.isShowEcommerce}))
  }

  showAcademy = () => {
    this.setState(prevState => ({isShowAcademy: !prevState.isShowAcademy}))
  }

  showLogistics = () => {
    this.setState(prevState => ({isShowLogistics: !prevState.isShowLogistics}))
  }

  showDashBoard = () => {
    this.setState(prevState => ({isShowDashBoard: !prevState.isShowDashBoard}))
  }

  showInVoice = () => {
    this.setState(prevState => ({isShowInVoice: !prevState.isShowInVoice}))
  }

  showUser = () => {
    this.setState(prevState => ({isShowUser: !prevState.isShowUser}))
  }

  showRolesPermission = () => {
    this.setState(prevState => ({
      isShowRolesPermission: !prevState.isShowRolesPermission,
    }))
  }

  showPages = () => {
    this.setState(prevState => ({isShowPages: !prevState.isShowPages}))
  }

  showAuthentication = () => {
    this.setState(prevState => ({
      isShowAuthentication: !prevState.isShowAuthentication,
    }))
  }

  showDashBoard = () => {
    this.setState(prevState => ({isShowDashBoard: !prevState.isShowDashBoard}))
  }

  showWizardExample = () => {
    this.setState(prevState => ({
      isShowWizardExample: !prevState.isShowWizardExample,
    }))
  }

  showCards = () => {
    this.setState(prevState => ({isShowCards: !prevState.isShowCards}))
  }

  showComponents = () => {
    this.setState(prevState => ({
      isShowComponents: !prevState.isShowComponents,
    }))
  }

  showExtension = () => {
    this.setState(prevState => ({isShowExtension: !prevState.isShowExtension}))
  }

  showFormElements = () => {
    this.setState(prevState => ({
      isShowFormElements: !prevState.isShowFormElements,
    }))
  }

  showFormWizard = () => {
    this.setState(prevState => ({
      isShowFormWizard: !prevState.isShowFormWizard,
    }))
  }

  showTables = () => {
    this.setState(prevState => ({isShowTables: !prevState.isShowTables}))
  }

  showCharts = () => {
    this.setState(prevState => ({isShowCharts: !prevState.isShowCharts}))
  }

  showNavLevels = () => {
    this.setState(prevState => ({isShowNavLevels: !prevState.isShowNavLevels}))
  }

  render() {
    const {
      initialList,
      isShowDashBoard,
      isShowFontPages,
      isShowEcommerce,
      isShowAcademy,
      isShowLogistics,
      isShowInVoice,
      isShowUser,
      isShowRolesPermission,
      isShowPages,
      isShowAuthentication,
      isShowWizardExample,
      isShowCards,
      isShowComponents,
      isShowExtension,
      isShowFormElements,
      isShowFormWizard,
      isShowTables,
      isShowCharts,
      isShowNavLevels,
    } = this.state

    console.log(initialList)

    return (
      <>
        <div className="bg-container">
          <div className="side-bar-con">
            <h6>Vuexy</h6>

            <CgRecord />

            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showDashBoard}
              >
                <BsEnvelopeOpen />
                {initialList[0].id} <BsChevronDown />
              </button>
              {isShowDashBoard &&
                initialList[0].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showFontPages}
              >
                <CgCopy />
                {initialList[1].id} <BsChevronDown />
              </button>
              {isShowFontPages &&
                initialList[1].listNames.map(each => <li>{each}</li>)}
            </div>
            <h6>APPS&PAGES </h6>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showEcommerce}
              >
                {initialList[2].id} <BsChevronDown />
              </button>
              {isShowEcommerce &&
                initialList[2].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button className="btn " type="button" onClick={this.showAcademy}>
                <BsEnvelopeOpen />
                {initialList[3].id} <BsChevronDown />
              </button>
              {isShowAcademy &&
                initialList[3].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[4].id} <BsChevronDown />
              </button>
              {isShowLogistics &&
                initialList[4].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <FaEnvelope />
                {initialList[5].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <FaComment />
                {initialList[6].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <FaRegCalendarAlt />
                {initialList[7].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[8].id}
              </button>
            </div>
            <div>
              <button className="btn " type="button" onClick={this.showInVoice}>
                <BsEnvelopeOpen />
                {initialList[9].id} <BsChevronDown />
              </button>
              {isShowInVoice &&
                initialList[9].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button className="btn " type="button" onClick={this.showUser}>
                <BsEnvelopeOpen />
                {initialList[10].id} <BsChevronDown />
              </button>
              {isShowUser &&
                initialList[10].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showRolesPermission}
              >
                <BsEnvelopeOpen />
                {initialList[11].id} <BsChevronDown />
              </button>
              {isShowRolesPermission &&
                initialList[11].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button className="btn " type="button" onClick={this.showPages}>
                <BsEnvelopeOpen />
                {initialList[12].id} <BsChevronDown />
              </button>
              {isShowPages &&
                initialList[12].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showAuthentication}
              >
                <BsEnvelopeOpen />
                {initialList[13].id} <BsChevronDown />
              </button>
              {isShowAuthentication &&
                initialList[13].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showFormWizard}
              >
                <BsEnvelopeOpen />
                {initialList[14].id} <BsChevronDown />
              </button>
              {isShowWizardExample &&
                initialList[14].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[15].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[16].id}
              </button>
            </div>
            <h6>UI ELEMENTS</h6>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[17].id}
              </button>
            </div>
            <div>
              <button className="btn " type="button" onClick={this.showCards}>
                <BsEnvelopeOpen />
                {initialList[18].id} <BsChevronDown />
              </button>
              {isShowCards &&
                initialList[18].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showComponents}
              >
                <BsEnvelopeOpen />
                {initialList[19].id} <BsChevronDown />
              </button>
              {isShowComponents &&
                initialList[19].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showExtension}
              >
                <BsEnvelopeOpen />
                {initialList[20].id} <BsChevronDown />
              </button>
              {isShowExtension &&
                initialList[20].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <h6>FORM & TABLES</h6>

              <button
                className="btn "
                type="button"
                onClick={this.showFormElements}
              >
                <BsEnvelopeOpen />
                {initialList[21].id} <BsChevronDown />
              </button>
              {isShowFormElements &&
                initialList[21].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[22].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showFormWizard}
              >
                <BsEnvelopeOpen />
                {initialList[23].id} <BsChevronDown />
              </button>
              {isShowFormWizard &&
                initialList[23].listNames.map(each => <li>{each}</li>)}
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[24].id}
              </button>
            </div>
            <div>
              <button className="btn " type="button" onClick={this.showTables}>
                <BsEnvelopeOpen />
                {initialList[25].id} <BsChevronDown />
              </button>
              {isShowTables &&
                initialList[25].listNames.map(each => <li>{each}</li>)}
            </div>
            <h6>CHARTS</h6>
            <div>
              <button className="btn " type="button" onClick={this.showCharts}>
                <BsEnvelopeOpen />
                {initialList[27].id} <BsChevronDown />
              </button>
              {isShowCharts &&
                initialList[26].listNames.map(each => <li>{each}</li>)}
            </div>
            <h6>OTHERS</h6>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[27].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showNavLevels}
              >
                <BsEnvelopeOpen />
                {initialList[28].id} <BsChevronDown />
              </button>
              {isShowNavLevels &&
                initialList[28].listNames.map(each => <li>{each}</li>)}
            </div>

            <h6>DISABLED MENU</h6>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[29].id}
              </button>
            </div>
            <div>
              <button
                className="btn "
                type="button"
                onClick={this.showLogistics}
              >
                <BsEnvelopeOpen />
                {initialList[30].id}
              </button>
            </div>
          </div>

          <nav className="navbar">
            <button
              className="navbar-toggler"
              onClick={this.onSearchDetails}
              type="button"
            >
              <CgSearch />
              <p className="icon-K">Search K</p>
              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      Trigger
                    </button>
                  }
                  overlayStyle={overlayStyles}
                >
                  <p>React is a popular and widely used programming language</p>
                </Popup>
              </div>
            </button>

            <div className="icon-con">
              <p>
                <FaAdn />
              </p>
              <p>
                <CgSun />
              </p>
              <p>
                <CgTikcode />
              </p>
              <p>
                <FaRegBell />
              </p>
              <button type="button" className="btn-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAuQ19QqcezKYmcSPttLfpSVmTsjZQPgFHsg4QT7ra5Irf3tnFxnI7H96AIfeoJ5qi_MQ&usqp=CAU"
                  className="avatar"
                />
              </button>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default Header
