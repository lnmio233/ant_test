import { Card, List, Table, DatePicker, Space, Row, Col, Radio } from 'antd';
import React from 'react';
import styles from './data.less';

const { RangePicker } = DatePicker;

const dataTotal = [
    {
        time: [{
            title: '总预测次数',
            content: '1111',
        }],
        rate: [{
            title: '总成功率',
            content: '95%',
        }]
    }
];

const dataEach = [
    {
        time: [{
            title: '大气预测次数',
            content: '1111',
        }],
        rate7: [{
            title: '7日成功率',
            content: '95%',
        }],
        rate30: [{
            title: '30日成功率',
            content: '95%',
        }]
    }, {
        time: [{
            title: '海洋预测次数',
            content: '1111',
        }],
        rate7: [{
            title: '7日成功率',
            content: '95%',
        }],
        rate30: [{
            title: '30日成功率',
            content: '95%',
        }]
    }
];

const dataSource = [{
    key: '1',
    time: '2022082418',
    atmData: 32,
    seaData: '西湖区湖底公园1号',
    atmRate: '80.51%',
    seaRate: '-',
    operation: ''
}, {
    key: '2',
    time: '2022082412',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '3',
    time: '2022082406',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '4',
    time: '2022082400',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '5',
    time: '2022082318',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '6',
    time: '2022082312',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '7',
    time: '2022082306',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '8',
    time: '2022082300',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '9',
    time: '2022082218',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '10',
    time: '2022082212',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '11',
    time: '2022082206',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '12',
    time: '2022082200',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '13',
    time: '2022082118',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '14',
    time: '2022082112',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}, {
    key: '15',
    time: '2022082106',
    atmData: 42,
    seaData: '西湖区湖底公园1号',
    atmRate: '',
    seaRate: '',
    operation: ''
}];

const columns = [{
    title: '预测时次',
    dataIndex: 'time',
    key: 'time',
}, {
    title: '大气预测数据',
    dataIndex: 'atmData',
    key: 'atmData',
}, {
    title: '海洋预测数据',
    dataIndex: 'seaData',
    key: 'seaData',
}, {
    title: '大气达标率',
    dataIndex: 'atmRate',
    key: 'atmRate',
}, {
    title: '海洋达标率',
    dataIndex: 'seaRate',
    key: 'seaRate',
}, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
}];


const App: React.FC = () => (
    <div>
        <div className={styles.header}>
            最新预测 UTC2022-11-01-18:00
        </div>

        <br />

        <Card size="small" title="关键指标">
            <Row>
                <Col span={6}>
                    <List
                        grid={{ column: 1 }}
                        dataSource={dataTotal}
                        renderItem={item => (
                            <List.Item>
                                <Card bordered={false} >
                                    <Row>
                                        <Col span={12}>
                                            <List
                                                dataSource={item.time}
                                                renderItem={item => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={item.title}
                                                            description={item.content}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                        <Col span={12}>
                                            <List
                                                dataSource={item.rate}
                                                renderItem={item => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={item.title}
                                                            description={item.content}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={18}>
                    <List
                        grid={{ column: 2 }}
                        dataSource={dataEach}
                        renderItem={item => (
                            <List.Item>
                                <Card bordered={false}>
                                    <Row>
                                        <Col span={8}>
                                            <List
                                                footer='成功率 95%'
                                                dataSource={item.time}
                                                renderItem={item => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={item.title}
                                                            description={item.content}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                        <Col span={8}>
                                            <List
                                                footer='环比 95%'
                                                dataSource={item.rate7}
                                                renderItem={item => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={item.title}
                                                            description={item.content}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                        <Col span={8}>
                                            <List
                                                footer='环比 95%'
                                                dataSource={item.rate30}
                                                renderItem={item => (
                                                    <List.Item>
                                                        <List.Item.Meta
                                                            title={item.title}
                                                            description={item.content}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </Card>

        <br />

        <Card size="small">
            <Row>
                <Col span={2}>
                    <div>详细数据</div>
                </Col>
                <Col span={6} offset={2}>

                    <div>
                        时间
                    </div>
                    <Radio.Group size="small" defaultValue={7}>
                        <Radio.Button value={7}>7天</Radio.Button>
                        <Radio.Button value={14}>14天</Radio.Button>
                        <Radio.Button value={21}>21天</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={8}>
                    <div>
                        <Space direction="vertical">
                            <RangePicker />
                        </Space>

                    </div>
                </Col>
            </Row>
            <div>
                合计：7天，42次，成功率：85%（大气：80%，海洋：90%）达标率：87%（大气：88%，海洋：86%）
            </div>
            <Table
                dataSource={dataSource}
                columns={columns}
            />
        </Card>
    </div>

);

export default App;




