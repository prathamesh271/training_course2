import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import Card from '../../components/ui/Card';
import { TeamOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';

const { TabPane } = Tabs;

export default function AssignmentFour() {
    const [leagues, setLeagues] = useState([]);
    const [sports, setSoprts] = useState([]);

    const getLeaguesData = async () => {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php');
        const resData = await response.json();
        console.log('response leagues', resData);
        setLeagues(resData.leagues);
    }

    const getSportsData = async () => {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php');
        const resData = await response.json();
        console.log('response sports', resData);
        setSoprts(resData.sports);
    }

    // console.log('leagues', leagues);

    useEffect(() => {
        getLeaguesData(); 
    }, []);

    useEffect(() => {
        getSportsData(); 
    }, []);

    return (
        <div className="container" style={{ marginTop: 10 }}>
            <div style={{ marginTop: 20, marginBottom: 20, marginLeft: 5 }}> 
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        <HomeOutlined /> Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><BookOutlined /> Assignment Four</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Card>
                <div>
                    <h2 style={{ textAlign: 'center' }}>Fetch API Data</h2>
                    <hr/>
                </div>
                <Tabs defaultActiveKey="1">
                    <TabPane 
                        tab={
                            <span style={{ fontSize: 16 }}><TeamOutlined /> Leagues</span>
                        }
                        key="1">
                            <ul style={{ listStyleType: 'number', marginTop: 10, paddingLeft: 0 }}>
                                {
                                    leagues.map((item) => {
                                        return(
                                            <>
                                                <li key={item.strLeague}>
                                                    <span style={{ fontWeight: 'bold' }}>League Title: </span>{item.strLeague} <br/>
                                                    <span style={{ fontWeight: 'bold' }}>League Alternate Name: </span>{item.strLeagueAlternate}
                                                </li>
                                                <hr/>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                    </TabPane>
                    <TabPane 
                        tab={
                            <span style={{ fontSize: 16 }}><TeamOutlined /> Sports</span>
                        } 
                        key="2">
                        <ul style={{ listStyleType: 'none', marginTop: 10, paddingLeft: 0 }}>
                            {
                                sports.map((item) => {
                                    return(
                                        <>
                                            <li key={item.idSport}>
                                                <p style={{ textAlign: 'center', marginBottom: 0 }}>
                                                    <span style={{ fontWeight: 'bold', fontSize: 20 }}>{item.strSport}</span>
                                                </p>
                                                <img src={item.strSportThumb} alt="" width="100%" style={{ marginTop: 10, marginBottom: 10 }}/><br/>
                                                <span style={{ fontWeight: 'bold' }}>Description: </span>{item.strSportDescription}
                                                <hr/>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </TabPane>
                </Tabs>
            </Card>
            <div className="" style={{ marginTop: 10, marginBottom: 10 }}>
                {/* {console.log('Leagues Response:', leagues)} */}
            </div>
        </div>
    )
}
