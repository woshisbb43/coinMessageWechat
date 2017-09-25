import React from 'react';
import axios from 'axios';
import {
    Button, Tab, TabBarItem, Article, Panel, SearchBar,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta
} from '../../../build/packages';
import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';
import { getTickets } from '../../service/coinMarketEndpoint';


const appMsgIcon = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" />

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            results: []
        };
      }

    handleChange(text, e){
        let keywords = [text];
        // let results = SampleData.filter(/./.test.bind(new RegExp(keywords.join('|'),'i')));
        
        // if(results.length > 3) results = results.slice(0,3);
        this.setState({
            // results,
            searchText:text,
        });
    }

    render() {
        return (
                <SearchBar
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.searchText}
                    placeholder="点我搜索币种"
                    lang={{
                        cancel: 'Cancel'
                    }}
                />
        );
    }
};

class Panels extends React.Component {

    render() {
        {
            return (
                <Panel>
                    <PanelBody>
                        <MediaBox type="appmsg" href="javascript:void(0);">
                            <MediaBoxHeader>{this.props.symbol}</MediaBoxHeader>
                            <MediaBoxBody>
                                {/* <MediaBoxTitle>{props.name} </MediaBoxTitle> */}
                                <MediaBoxDescription>
                                    <ul class="list-style">
                                        <li >人民币 {Number(this.props.price_cny).toFixed(3)}</li>
                                        <li>24小时涨跌 {this.props.percent_change_24h}%</li>
                                    </ul>
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                    </PanelBody>
                </Panel>
            )
            // }
        }
    }
}

const PanelsList = (props) => {
    return (
        <div> {props.coins.map(coin => <Panels {...coin} />)} </div>
    )
}

export default class TabBarAutoDemo extends React.Component {
    state = {
        data: []
    }

    componentWillMount() {
        getTickets().then(response => this.setState({
            data: response
        }));
    }

    render() {
        const { data } = this.state;

        return (
            <Tab type="tabbar">
                {/* <TabBarItem icon={<img src={IconButton} />} label="币问答">
                    <Article>
                        <h1>币问答</h1>
                        <Button > getdata </Button>
                        <section>
                            <section>
                                <p>共產主義政黨 在共產主义政党和组织中，由书记组成的党委员会（党委）或书记处的最高负责人，一般称为“书记”或“第一书记”，在“第一书记”下面的书记成员有時还分设副书记、第二书记、第三书记、本处书记、常务书记、事务书记、候补书记等。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg} />} label="往期信息">
                    <Article>
                        <h1>币百科</h1>
                        <section>
                            <section>
                                <p>首席执行官（英语：Chief Executive Officer，缩写为CEO；香港称行政总裁；台湾称执行长；中国大陆称首席执行官），公司三长之一（另二为董事长、财务长），是在一个企业集团、财阀或行政单位中的最高行政负责人。</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem> */}
                <TabBarItem icon={<img src={IconArticle} />} label="实时行情">
                    <PanelHeader>
                    <Search/>
                        <PanelsList coins={data} />
                    </PanelHeader>
                </TabBarItem>
            </Tab>
        );
    }
};