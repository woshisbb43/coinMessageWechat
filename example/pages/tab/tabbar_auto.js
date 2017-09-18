import React from 'react';
import { Tab, TabBarItem, Article } from '../../../build/packages';
import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';

export default class TabBarAutoDemo extends React.Component {
    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconButton}/>} label="书记">
                    <Article>
                        <h1>书记</h1>
                        <section>
                            <section>
                                <p>共產主義政黨 在共產主义政党和组织中，由书记组成的党委员会（党委）或书记处的最高负责人，一般称为“书记”或“第一书记”，在“第一书记”下面的书记成员有時还分设副书记、第二书记、第三书记、本处书记、常务书记、事务书记、候补书记等。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg}/>} label="CEO">
                    <Article>
                        <h1>CEO</h1>
                        <section>
                            <section>
                                <p>首席执行官（英语：Chief Executive Officer，缩写为CEO；香港称行政总裁；台湾称执行长；中国大陆称首席执行官），公司三长之一（另二为董事长、财务长），是在一个企业集团、财阀或行政单位中的最高行政负责人。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconArticle}/>} label="CTO">
                    <Article>
                        <h1>CTO</h1>
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
