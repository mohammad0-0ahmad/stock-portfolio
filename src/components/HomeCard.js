import React, { useState, useEffect } from 'react';
import Content from './Content'
import WelcomeBar from './WelcomeBar'
import ContentItem from './ContentItem'
import ContetItemHeader from './ContentItemHeader'
import UserImgNamePN from './UserImgNamePN'
import userimg from '../imgs/user.png'
import PreferedIndustries from './PreferedIndustries'
import ContactInfo from './ContactInfo'
import CurrentUpdate from './CurrentUpdate'
import BarChart from './BarChart'
import BarChartDetailsList from './BarChartDetailsList'
import { useHistory } from 'react-router-dom'
import { fetchJSON } from '../utilities/fetchData'


const HomeCard = () => {
    var history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [personNumber, setPersonNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [lastUpdate, setLastUpdate] = useState('')

    useEffect(() => {
        fetchJSON('/userinfo', { session: localStorage.sessionId }, (data) => {
            if (data.status) {
                console.log('error')
            }
            else {
                setFirstName(data[0].f_name)
                setPersonNumber(data[0].p_nr)
                setAddress(data[0].address)
                setCity(data[0].city)
                setZipCode(data[0].postal_code)
                setPhone(data[0].telephone)
                setEmail(data[0].email)
                setLastUpdate(data[0].l_update)


            }
        })
    }, [])
    let industries = ['Tech', 'Finance', 'Health', 'Materials']
    const tabData = [
        { title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Medtech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Fintech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Industri', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Övrigt', details: 'Företag 1, Företag 2 +4', amount: '32 244' }
    ]
    const welcomeBar = <WelcomeBar updated={lastUpdate} name={firstName} hasStocks={true} />

    return (
        <Content title='Hem' welcomeBar={welcomeBar}>
            <ContentItem>
                <ContetItemHeader title={'Min Profil'} button={{ buttonText: 'Redigera', handleClick: () => history.push("/settings") }} />
                <UserImgNamePN userData={{ img: userimg, name: firstName, personNr: personNumber }} />
                <PreferedIndustries industries={industries} />
                <ContactInfo phone={phone} email={email} address={address} zipCode={zipCode} city={city} />
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