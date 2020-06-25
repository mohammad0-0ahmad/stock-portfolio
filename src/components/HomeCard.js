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
import { fetchJSON } from '../utilities/fetchData'
import MessageCard from './MessageCard';

const HomeCard = ({ history }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personNumber, setPersonNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [lastUpdate, setLastUpdate] = useState('')
    const [stockOverview, setStockOverview] = useState({})
    const [barChartData, setBarChartData] = useState([])

    let industries = ['Tech', 'Finance', 'Health', 'Materials']

    useEffect(() => {
        fetchJSON('/userinfo', { session: localStorage.sessionId }, (data) => {
            if (data.email) {
                setFirstName(data.f_name)
                setLastName(data.l_name)
                setPersonNumber(data.p_nr)
                setAddress(data.address)
                setCity(data.city)
                setPostalCode(data.postal_code)
                setPhone(data.telephone)
                setEmail(data.email)
                setLastUpdate(data.l_update)
            }
        })
        fetchJSON('/stocks_overview', { session: localStorage.sessionId }, (data) => {
            if (data.totalBalance) {
                setStockOverview(data);
                const barChartData = data.industries.map(industry => parseInt(industry.value.replace(/ /g, '')));
                setBarChartData(barChartData)
            }
        })
    }, [])

    const welcomeBar = <WelcomeBar updated={lastUpdate} name={firstName} hasStocks={stockOverview.totalBalance !== '0'} />
    return (
        <Content title='Hem' welcomeBar={welcomeBar}>
            <ContentItem>
                <ContetItemHeader title={'Min Profil'} button={{ buttonText: 'Redigera', handleClick: () => history.push("/settings") }} />
                <UserImgNamePN userData={{ img: userimg, name: firstName + ' ' + lastName, personNr: personNumber }} />
                <PreferedIndustries industries={industries} />
                <ContactInfo phone={phone} email={email} address={address} postalCode={postalCode} city={city} />
            </ContentItem>
            <ContentItem>
                <ContetItemHeader title={'Mitt Innehav'} button={{ buttonText: 'Min portfölj', handleClick: () => history.push("/portfolio") }} />
                <CurrentUpdate
                    value={stockOverview.totalBalance}
                    currency={stockOverview.currency}
                    date={lastUpdate}
                />
                <BarChart
                    amountSectorsToShow={5}
                    sectors={barChartData}
                />
                {stockOverview.totalBalance !== '0' &&
                    <BarChartDetailsList
                        data={stockOverview.industries}
                        currency={stockOverview.currency}
                    />
                }{stockOverview.totalBalance === '0' &&
                    <MessageCard text='Inget innehav tillagt ännu' />
                }

            </ContentItem>
        </Content>
    )
}

export default HomeCard;