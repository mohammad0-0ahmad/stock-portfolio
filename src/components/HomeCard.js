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
import MessageCard from './MessageCard';

const HomeCard = () => {
    var history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personNumber, setPersonNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [lastUpdate, setLastUpdate] = useState('')
    const [stockOverview, setStockOverview] = useState({})
    const [barChartData, setBarChartData] = useState([])

    let industries = ['Tech', 'Finance', 'Health', 'Materials']

    useEffect(() => {
        fetchJSON('/userinfo', { session: localStorage.sessionId }, (data) => {
            if (data.status) {
                console.log('error')
            }
            else {
                setFirstName(data[0].f_name)
                setLastName(data[0].l_name)
                setPersonNumber(data[0].p_nr)
                setAddress(data[0].address)
                setCity(data[0].city)
                setZipCode(data[0].postal_code)
                setPhone(data[0].telephone)
                setEmail(data[0].email)
                setLastUpdate(data[0].l_update)
            }
        })
        fetchJSON('/stocks_overview', { session: localStorage.sessionId }, (data) => {
            console.log(data)
            if (data.totalBalance) {
                setStockOverview(data);
                const barChartData = data.industries.map(industry => parseInt(industry.value.replace(/ /g, '')));
                console.log(barChartData)
                setBarChartData(barChartData)
            }
        })
    }, [])

    const welcomeBar = <WelcomeBar updated={lastUpdate} name={firstName} hasStocks={stockOverview.totalBalance !== '0'} />
    return (
        <Content title='Hem' welcomeBar={welcomeBar}>
            <ContentItem>
                <ContetItemHeader title={'Min Profil'} button={{ buttonText: 'Redigera', handleClick: () => history.push("/settings") }} />
                <UserImgNamePN userData={{ img: userimg, name: firstName+' '+lastName, personNr: personNumber }} />
                <PreferedIndustries industries={industries} />
                <ContactInfo phone={phone} email={email} address={address} zipCode={zipCode} city={city} />
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