import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Layout, Icon } from 'antd';
import { Route } from 'react-router-dom';
import Load from '../components/Load';
import SiderBar from '../components/SiderBar';
import { getMenuData } from '../constants/menu';

const { Header, Sider, Content, Footer } = Layout;

/**
 * 通过权限数组过滤菜单
 * @param {Array} menuData 菜单数据
 * @param {Array} authorityArr 权限数组
 * @returns {Array} 过滤后的菜单
 * @author xietf
 */
function filterMenuData(menuData, authorityArr = ['01', '02']) {
  /**
   * 生成带有undifind的菜单数组
   * @param {Array} _menuData 菜单数组
   * @param {Array} _authorityArr 权限数组
   * @returns {Array}
   * @author xietf
   */
  function _filterMenuData(_menuData, _authorityArr) {
    return _menuData.map(item => {
      // 当层级能匹配，后续所有层级都通过
      if (_authorityArr.some(val => val === item.authority)) {
        return item;
      }
      if (item.children) {
        return {
          ...item,
          children: _filterMenuData(item.children, _authorityArr),
        };
      }
      return undefined;
    });
  }
  /**
   * 去除菜单中的undifind
   * @param {Array} inputData 带有undifind的菜单数组
   * @returns {Array}
   * @author xietf
   */
  function _removeUndifind(inputData) {
    let result = []; // eslint-disable-line
    if (Array.isArray(inputData)) {
      inputData.forEach(item => {
        // 判断是否为空
        if (item) {
          // 判断是否有子元素
          if (item.children) {
            // 如果所有子元素不全为undifind
            if (item.children.some(val => val)) {
              const cash = _removeUndifind(item.children);
              result.push({ ...item, children: cash });
            }
          } else {
            result.push(item);
          }
        }
      });
    }
    return result;
  }
  const result = _filterMenuData(menuData, authorityArr);
  return _removeUndifind(result);
}

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, // 侧边栏状态
    };
  }

  componentDidMount() {
    const loginStauts = true;
    const { history } = this.props;
    if (!loginStauts) {
      history.push('/login');
    }
  }

  componentWillUpdate(nextProps) {
    console.log(nextProps);
  }

  /**
   * 修改侧边栏状态
   */
  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  buildRoute = menuData => {
    let cashArr = []; // eslint-disable-line
    if (Array.isArray(menuData)) {
      menuData.forEach(item => {
        let result = [];
        if (item.children) {
          result = this.buildRoute(item.children); // eslint-disable-line
          cashArr = [...cashArr, ...result];
        }
        if (!item.children) {
          const path = item.path.split('/').pop();
          // console.log(path);
          cashArr = [
            ...cashArr,
            ...result,
            <Route
              key={item.name}
              path={item.path}
              component={Loadable({
                loader: () => import(`../routes/${path}`),
                loading: Load,
              })}
            />,
          ];
        }
      });
      return cashArr;
    }
    return Error('出错了');
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              minHeight: '100vh',
              padding: '1em 0',
              boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.65)',
                lineHeight: '1.5',
              }}
            >
              logo
            </h2>
            <SiderBar menuData={filterMenuData(getMenuData())} />
          </Sider>
          <Layout>
            <Header
              style={{
                background: '#fff',
                padding: '0 1em',
                boxShadow: '2px 0 6px rgba(0, 21, 41, 0.35)',
                zIndex: '1000',
              }}
            >
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{ fontSize: '1.5em' }}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {this.buildRoute(getMenuData())}
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, sapiente aspernatur magni est cum eos.
                </p>
                <p>
                  Laboriosam perspiciatis necessitatibus sapiente earum quos
                  deserunt vitae repellat alias. Nobis, tempore velit.
                  Doloremque, quod.
                </p>
                <p>
                  Iure, porro rerum voluptatum assumenda tempore, consequuntur
                  blanditiis laudantium vel voluptatem, molestiae aliquid error
                  voluptatibus?
                </p>
                <p>
                  Natus neque quasi unde, quidem veniam praesentium excepturi
                  necessitatibus, esse animi dignissimos beatae voluptas ad?
                </p>
                <p>
                  Corrupti, itaque inventore velit voluptas enim aperiam, esse
                  eos, temporibus distinctio aut quod quibusdam dignissimos!
                </p>
                <p>
                  Blanditiis illum atque similique doloribus. Ratione molestiae
                  accusamus eligendi dolor dolorem corporis magni sequi odio.
                </p>
                <p>
                  Sapiente ipsum modi, blanditiis beatae corrupti, iste ea,
                  repellat in animi delectus atque distinctio exercitationem!
                </p>
                <p>
                  Corporis veritatis ipsa est similique reprehenderit illum
                  quibusdam eos enim tempora, sequi unde modi dignissimos!
                </p>
                <p>
                  Inventore, ut? Animi inventore mollitia facere, error
                  consequatur, voluptates voluptate accusamus facilis natus
                  perspiciatis sunt?
                </p>
                <p>
                  Natus, placeat, voluptatum dicta aliquam quasi minima, nam
                  illum animi accusamus inventore asperiores sunt maiores.
                </p>
                <p>
                  Itaque nemo, deleniti perferendis eligendi beatae architecto
                  dignissimos aut optio totam ipsam. Ut, dolores animi.
                </p>
                <p>
                  Sint neque maiores id voluptatum reiciendis, ex, illum qui
                  repellat consequuntur quasi tenetur incidunt eveniet.
                </p>
                <p>
                  Blanditiis debitis possimus soluta maiores cupiditate quod
                  suscipit distinctio ipsam cum nemo. Voluptate, optio est!
                </p>
                <p>
                  Minima, similique distinctio error atque sed nam suscipit
                  corporis facere illo doloremque obcaecati sit dolore.
                </p>
                <p>
                  Quo adipisci vel, optio, iste necessitatibus quasi impedit
                  magni sit nobis veritatis amet facere inventore!
                </p>
                <p>
                  Nobis, eum laborum. Iste magni itaque accusamus officiis natus
                  alias eaque ab repudiandae quo sit.
                </p>
                <p>
                  Iusto velit dolore corporis, labore explicabo earum debitis,
                  praesentium quaerat tempora magnam dolorem voluptatem dicta.
                </p>
                <p>
                  Blanditiis cum ab modi! Magnam laudantium vel minus neque nisi
                  repudiandae fugiat eveniet voluptate eum!
                </p>
                <p>
                  Quos aperiam consequatur maiores vitae explicabo veniam?
                  Eaque, reiciendis! In ipsum fugiat necessitatibus cum vero!
                </p>
                <p>
                  Iure vel eos molestias, voluptates a impedit maxime ipsa nobis
                  dolore maiores, tempora rerum iusto.
                </p>
                <p>
                  Nobis mollitia, sint alias reiciendis quas nemo similique
                  harum, in culpa labore deleniti iure tenetur?
                </p>
                <p>
                  Rerum ipsa, distinctio laudantium, magnam voluptatem quis non
                  ipsum dolore possimus sequi, perspiciatis repudiandae a.
                </p>
                <p>
                  Suscipit iure rem vitae placeat aspernatur. Quia, tempora iure
                  officia aut repellendus fugit quaerat impedit?
                </p>
                <p>
                  Ipsam officiis vitae fugit, totam similique, ipsum aspernatur
                  est repellendus dolore, eligendi voluptas inventore nulla.
                </p>
                <p>
                  Aut quos iusto at iure sint, laborum labore nesciunt incidunt
                  pariatur distinctio deleniti error quo.
                </p>
                <p>
                  Ea natus similique sint, temporibus, libero repellat
                  reiciendis iure hic autem reprehenderit, adipisci tempore nam.
                </p>
                <p>
                  Excepturi illo atque, recusandae placeat ullam non facilis,
                  sed est mollitia veniam iure aliquam temporibus?
                </p>
                <p>
                  Repellendus eligendi itaque excepturi odit maiores molestias
                  eius tenetur fugit? Eveniet, quod vel. Dolorem, voluptate.
                </p>
                <p>
                  Praesentium, quam id saepe earum debitis iste nemo fugit?
                  Accusantium dignissimos neque ducimus nobis hic?
                </p>
                <p>
                  Doloremque ut voluptate dolor incidunt quam, doloribus
                  veritatis debitis alias, laboriosam dolorem libero,
                  necessitatibus quae!
                </p>
                <p>
                  Dolor laborum, laboriosam molestias beatae veritatis ipsum
                  dicta, placeat, ea nam iste magni a voluptates.
                </p>
                <p>
                  Cumque eum et error pariatur quod deserunt autem praesentium
                  placeat tempore, rerum saepe repellat repellendus.
                </p>
                <p>
                  Velit, voluptatum ipsum labore, nesciunt provident illum porro
                  sequi incidunt quod, corrupti vero quisquam! Incidunt.
                </p>
                <p>
                  Est temporibus veniam neque rerum repudiandae quisquam
                  reiciendis at! Odio recusandae nobis repellendus eaque animi!
                </p>
                <p>
                  Eum unde dolor esse nobis facere, soluta voluptas quam quod
                  ipsa voluptatibus porro necessitatibus corporis?
                </p>
                <p>
                  Maiores, consequuntur aspernatur quod fugit beatae vero
                  soluta! Reprehenderit nostrum, laudantium architecto ullam
                  similique consequuntur?
                </p>
                <p>
                  Corporis exercitationem nulla repellat, illo tenetur quam
                  vero, culpa, ipsam veritatis optio pariatur fugit quos!
                </p>
                <p>
                  Hic, animi, quisquam nulla commodi officiis aperiam magnam
                  illum iste veritatis, eaque mollitia voluptatibus voluptatem.
                </p>
                <p>
                  Nam, dignissimos! Vel ipsam sunt amet? Fugiat libero expedita,
                  fuga quo rerum explicabo reiciendis maiores?
                </p>
                <p>
                  Sit, illo eaque voluptatibus, officiis facilis blanditiis
                  placeat repellendus ipsam voluptates aspernatur itaque rem
                  accusamus?
                </p>
                <p>
                  Porro dicta ipsam excepturi fugit iure quas iste veritatis, et
                  nemo exercitationem molestiae repellendus nisi!
                </p>
                <p>
                  Odio totam at, voluptate impedit esse quod animi commodi culpa
                  vel explicabo dolor, autem ipsa.
                </p>
                <p>
                  Nostrum dolores totam at commodi, quos ex, dolore molestias,
                  ullam consequatur aliquam assumenda culpa officia?
                </p>
                <p>
                  Similique, ipsam illum velit eius voluptatibus odio in
                  distinctio id deserunt? Ex laboriosam excepturi illum.
                </p>
                <p>
                  Corrupti earum asperiores dolores ipsa, quae quod voluptas in
                  doloribus quos vero laboriosam libero voluptatum.
                </p>
                <p>
                  Autem, ex harum! Voluptatem eum illum consectetur minima.
                  Tenetur, iste iure nulla aliquid corporis exercitationem!
                </p>
                <p>
                  Facere, magnam nihil cupiditate fugiat, in sunt pariatur
                  officiis tenetur nobis expedita debitis velit iusto!
                </p>
                <p>
                  Quibusdam doloremque delectus ipsa repellendus aliquid
                  consequuntur. Aliquid quaerat sequi nobis magnam, delectus at
                  sit!
                </p>
                <p>
                  A, exercitationem? Id magni commodi, numquam rem distinctio
                  eligendi ad ut debitis repudiandae, sapiente expedita.
                </p>
                <p>
                  Fuga nobis esse neque ea eaque impedit vitae, incidunt sint
                  quae minima veniam! Et, unde.
                </p>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', padding: '1em' }}>
              卧龙大数据
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BasicLayout;
