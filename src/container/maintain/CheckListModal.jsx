import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

const Wrap = styled.div`
  overflow: auto;
  height: 400px;

  ol {
    /* padding-left: 3em; */
    list-style-type: decimal;
    list-style-position: inside;
    li {
      padding: 0.5em 0em 0.5em 2em;
      color: #666666;
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        title="检查清单"
        visible={false}
        footer={null}
        bodyStyle={{ padding: '0' }}
      >
        <Wrap>
          <ol>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quam.
            </li>
            <li>
              Necessitatibus ipsum omnis neque minus? Sapiente ab aspernatur
              amet repudiandae.
            </li>
            <li>
              Voluptas quis, perspiciatis ratione atque enim blanditiis. Eaque,
              similique earum.
            </li>
            <li>
              Eius accusamus itaque quia incidunt recusandae maxime totam
              molestias laudantium?
            </li>
            <li>
              Saepe, libero. Voluptates similique amet repellendus deserunt,
              facere repudiandae quas!
            </li>
            <li>
              Harum eos dolor officia modi minima repudiandae provident totam
              quas?
            </li>
            <li>
              Voluptas consequuntur iste ratione! Dignissimos provident neque
              eaque expedita itaque!
            </li>
            <li>
              Magni fuga, iure accusamus quia ea nesciunt minima reiciendis eos?
            </li>
            <li>
              Ullam blanditiis perferendis quis cupiditate eaque, id distinctio
              suscipit porro.
            </li>
            <li>
              Adipisci consequuntur odio sed nobis dicta cum ea optio omnis!
            </li>
            <li>
              Nihil repellat commodi culpa aspernatur molestias, id velit magni
              sed?
            </li>
            <li>
              Quaerat sequi error beatae ducimus voluptate reiciendis distinctio
              ullam praesentium.
            </li>
            <li>Error amet unde at ipsam ducimus et illo eaque accusantium.</li>
            <li>
              Quos commodi nihil ab sint suscipit molestiae cupiditate mollitia
              sapiente?
            </li>
            <li>
              Maxime labore quidem quam id voluptatem reprehenderit non cumque
              omnis.
            </li>
            <li>
              Fugiat, earum placeat dolorum tenetur id nihil alias est ut!
            </li>
            <li>
              Quas illo maxime, blanditiis aliquid similique corrupti provident!
              Dolorem, facere.
            </li>
            <li>
              Debitis rem aliquam, eius asperiores laudantium quasi quis amet?
              Eos?
            </li>
            <li>Suscipit in eius vel optio, fugiat animi earum quod. Atque?</li>
            <li>
              Natus facilis molestias maxime repellat sequi qui dolorum sed
              odit?
            </li>
            <li>
              Similique eos tempore obcaecati perferendis repudiandae libero,
              quis inventore architecto?
            </li>
            <li>
              Ut earum aliquam a reprehenderit omnis vitae excepturi, corporis
              officia?
            </li>
            <li>
              Soluta quam facilis quidem quod, quo aliquam sint fugiat minus.
            </li>
            <li>
              Veniam tempora explicabo, libero ipsa quasi ex molestiae maxime
              reiciendis.
            </li>
            <li>
              Ipsa quas placeat voluptas ratione quaerat nam nisi modi
              laboriosam!
            </li>
            <li>
              Nulla quam quisquam tempore eveniet veritatis non! Quasi,
              explicabo quos?
            </li>
            <li>
              Ex ducimus ad placeat non odio dolorum sint molestiae dolorem.
            </li>
            <li>
              Eius saepe maxime modi laudantium, doloribus a architecto
              voluptates esse.
            </li>
            <li>
              Voluptate facere recusandae quas nihil quod magnam voluptas,
              dolores quasi.
            </li>
            <li>
              Saepe in possimus necessitatibus debitis voluptas numquam ducimus!
              Nisi, blanditiis?
            </li>
            <li>
              Perspiciatis officia possimus maxime veritatis quas doloremque
              fugit iure porro.
            </li>
            <li>
              Fuga voluptate exercitationem voluptates aliquid voluptas
              voluptatem cupiditate quia deserunt!
            </li>
            <li>
              Optio veniam, voluptatibus magni voluptatum atque eius ea
              cupiditate maiores.
            </li>
            <li>
              Reiciendis quo accusantium aliquam corrupti placeat amet unde
              fugiat corporis.
            </li>
            <li>
              Aut accusamus optio quos, odit voluptatibus eum fugiat hic cumque?
            </li>
            <li>Atque odio ipsa rem minus quasi vitae ex harum odit.</li>
            <li>
              Esse harum cupiditate nihil magnam aperiam quo, excepturi fugiat?
              Praesentium.
            </li>
            <li>
              Reprehenderit libero iure nesciunt est temporibus? Commodi omnis
              animi cupiditate!
            </li>
            <li>
              Quidem mollitia omnis repellendus quis minus delectus, alias
              nesciunt quas?
            </li>
            <li>
              Corporis illo dicta sunt assumenda? Fugiat officiis totam tempore
              sint.
            </li>
            <li>
              Laudantium et itaque asperiores quo! Animi, labore magnam? Nulla,
              nihil!
            </li>
            <li>
              Veritatis, eveniet. Fugit aliquam saepe quia deserunt error sint
              nam.
            </li>
            <li>
              Earum dignissimos eveniet ipsa cum pariatur laborum iure neque
              facilis?
            </li>
            <li>
              Accusantium, quos dolorum optio consectetur error voluptatum? Ut,
              iure nisi?
            </li>
            <li>
              Quam, eveniet itaque modi voluptates cum sequi architecto!
              Perferendis, officiis?
            </li>
            <li>
              Fugiat, aliquam commodi id eveniet recusandae repudiandae soluta
              nulla beatae.
            </li>
            <li>
              Molestiae in maiores sunt minima unde! Maxime assumenda quos sed!
            </li>
            <li>
              Est quae dolorum consequuntur. Laborum sint quia praesentium ad
              facere!
            </li>
            <li>
              Cupiditate odio totam, numquam sequi temporibus quisquam ratione
              alias laboriosam.
            </li>
            <li>
              Enim suscipit quam reprehenderit. Pariatur, ipsam ipsum. Enim,
              temporibus laudantium.
            </li>
          </ol>
        </Wrap>
      </Modal>
    );
  }
}

export default CheckList;
