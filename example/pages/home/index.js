import React from 'react';
import axios from 'axios';
import { Button, Tab, TabBarItem, Article } from '../../../build/packages';
import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';
import * as coinMApi  from '../../service/coinMarketEndpoint'


export default class TabBarAutoDemo extends React.Component {
    testnum = () =>{
        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=1")
        .then((response) =>{
            // return response;
            console.log(response);
        });
    }
    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconButton}/>} label="币问答">
                    <Article>
                        <h1>币问答</h1>
                        <Button onClick= {coinMApi.apiData} > getdata </Button>
                        <section>
                            <section>
                                <p>共產主義政黨 在共產主义政党和组织中，由书记组成的党委员会（党委）或书记处的最高负责人，一般称为“书记”或“第一书记”，在“第一书记”下面的书记成员有時还分设副书记、第二书记、第三书记、本处书记、常务书记、事务书记、候补书记等。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg}/>} label="往期信息">
                    <Article>
                        <h1>币百科</h1>
                        <section>
                            <section>
                                <p>首席执行官（英语：Chief Executive Officer，缩写为CEO；香港称行政总裁；台湾称执行长；中国大陆称首席执行官），公司三长之一（另二为董事长、财务长），是在一个企业集团、财阀或行政单位中的最高行政负责人。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconArticle}/>} label="实时行情">
                    <Article>
                        <h1>实时行情</h1>
                        <section>
                            <section>
                                <p>首席技术官（英语：Chief Technology Officer，英文缩写：CTO，又常称为技术官、技术总监）是企业团体里的高阶主管职位之一，是企业内负责技术的最高负责人。这个名称是在1980年代时从美国开始兴起，起源于一些有大规模投资在研究与发展（R&D）项目的大型公司，如通用电气（General Electric, GE），美国电话电报（AT&T）与美国铝业（ALCOA），主要责任是将科学研究成果转为营利项目。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
            </Tab>
        );
    }
};

