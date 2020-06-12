import React from 'react'
import Content from './Content'
import WelcomeBar from './WelcomeBar'
import ContentItem from './ContentItem'
import ContetItemHeader from './ContentItemHeader'
import UserImgNamePN from './UserImgNamePN'
import userimg from '../user.png'
import PreferedIndustries from './PreferedIndustries'
import ContactInfo from './ContactInfo'
import CurrentUpdate from './CurrentUpdate'
import BarChart from './BarChart'
import BarChartDetailsList from './BarChartDetailsList'
import { useHistory } from 'react-router-dom'

const HomeCard = () => {
    var history = useHistory()

    /** */
    let person = {
        firstName: 'Magnus',
        lastName: 'Persson',
        phone: '079 946 3654',
        mail: 'magnus.persson@hotmail.com',
        adress: 'Lantmilsgatan 7',
        zipCode: '415 01',
        city: 'Göteborg',
        personNumber: '780717-4444',
        passWord: 'henrik'
    }
    let industries = ['Tech', 'Finance', 'Health', 'Materials']
    const tabData = [
        { title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Medtech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Fintech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Industri', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Övrigt', details: 'Företag 1, Företag 2 +4', amount: '32 244' }
    ]
    const welcomeBar = <WelcomeBar updated='2020-10-20' name={person.firstName} hasStocks={true} />

    return (
        <Content title='Hem' welcomeBar={welcomeBar}>
            <ContentItem>
                <ContetItemHeader title={'Min Profil'} button={{ buttonText: 'Redigera', handleClick: () => history.push("/settings") }} />
                <UserImgNamePN userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />
                <PreferedIndustries industries={industries} />
                <ContactInfo person={person} />
            </ContentItem>
            <ContentItem>
                <ContetItemHeader key='0' title={'Mitt Innehav'} button={{ buttonText: 'Min portfölj', handleClick: () => history.push("/portfolio") }} />
                <CurrentUpdate key='8' value="827,300 SEK" date="Uppdaterat 2020-02-26" />
                <BarChart key='1' amountSectorsToShow={5} sectors={[50, 10, 20, 15, 20]} />
                <BarChartDetailsList key='2' data={tabData} />
            </ContentItem>
        </Content>
    )
}
export default HomeCard;