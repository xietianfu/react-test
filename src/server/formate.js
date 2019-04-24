/** @format */

const fs = require("fs");
const path = require("path");

const docPath = "./doc.md";

let wuliangyeData = fs.readFileSync("./工商理财企业推荐系统.json");
wuliangyeData = JSON.parse(wuliangyeData);

// 响应参数类型列表
const paramTypeList = {
  0: "string",
  1: "number",
  2: "bool",
  3: "array",
  4: "object",
  5: "mixed",
};

// 请求参数是否必传
const mustType = {
  1: "Y",
  0: "N",
};

fs.openSync(docPath, "w+", function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！");
});

let doc = fs.createWriteStream(docPath, { flags: "r+" });
// doc.write('# 五粮液接口文档 \n');

for (const item of wuliangyeData.data) {
  // 写入二级标题
  doc.write(`\n ##### ${item.name} \n`);
  // 写入接口文档
  item.data.forEach((item) => {
    // 写入接口名称
    if (item.data) {
      doc.write(`\n ###### ${item.name} \n`);
      item.data.forEach((item) => {
        // doc.write(`\n **接口名称:** ${item.name} \n`);
        // doc.write(`\n **请求方式:** ${item.method} \n`);
        // doc.write(`\n **接口名:** ${item.url} \n`);
        buildTable(item);
      });
    } else {
      // doc.write(`\n **接口名称:** ${item.name} \n`);
      // doc.write(`\n **请求方式:** ${item.method} \n`);
      // doc.write(`\n **接口名:** ${item.url} \n`);
      buildTable(item);
    }
  });
}

function buildTable(params) {
  const { param, name, method, url, remark } = params;
  const { queryParam, outParam } = param[0];

  doc.write(`\n **接口名称：** ${name} \n`);
  remark && doc.write(`\n **接口说明：** ${remark} \n`);
  doc.write(`\n **请求方式：** ${method} \n`);
  doc.write(`\n **接口名：** ${url} \n`);

  doc.write(`\n **请求参数：** \n`);

  getReq(param[0], method);

  doc.write(`\n **响应数据：** \n`);

  doc.write(`| 参数名称 | 参数类型 | 参数说明 | \n`);
  doc.write(`| :------| :------| :------| \n`);
  getRes(outParam);
}

function getRes(params, parent = "") {
  if (Array.isArray(params)) {
    params.forEach((item) => {
      let name = "";
      if (item.data) {
        let newParent = "";
        switch (item.type) {
          case 0:
          case 1:
          case 2:
            newParent = !!parent ? `${parent}.${item.name}` : `${item.name}`;
            break;
          case 3:
            newParent = !!parent
              ? `${parent}.${item.name}[]`
              : `${item.name}[]`;
            break;
          case 4:
            if (item.name === null) {
              newParent = parent;
              break;
            } else {
              newParent = !!parent ? `${parent}.${item.name}` : `${item.name}`;
            }
            break;
          default:
            break;
        }
        if (item.name === null) {
          name = parent;
        } else {
          name = !!parent ? `${parent}.${item.name}` : `${item.name}`;
          doc.write(
            `| ${name} | ${paramTypeList[item.type]}  | ${item.remark} | \n`,
          );
        }
        return getRes(item.data, newParent);
      }

      if (item.name === null) {
        name = parent;
      } else {
        name = !!parent ? `${parent}.${item.name}` : `${item.name}`;
      }
      return doc.write(
        `|  ${name} |  ${paramTypeList[item.type]}  | ${item.remark} | \n`,
      );
    });
  }
}

function getReq(params, method) {
  switch (method.toUpperCase()) {
    case "GET":
      getGETReq(params);
      break;
    case "POST":
      getPOSTReq(params);
    default:
      break;
  }
}

function getGETReq(params) {
  const { queryParam } = params;

  if (queryParam.length > 0) {
    doc.write(`| 参数名称 | 是否必传 | 参数说明 | \n`);
    doc.write(`| :------| :------| :------| \n`);

    queryParam.forEach((item) => {
      doc.write(
        `| ${item.name} | ${mustType[item.must]} | ${item.remark} | \n`,
      );
    });
  }
}

function getPOSTReq(params) {
  const { queryParam, bodyInfo } = params;
  const { rawJSON } = bodyInfo;

  doc.write(`| 参数名称 | 是否必传 | 参数说明 | \n`);
  doc.write(`| :------| :------| :------| \n`);

  if (queryParam.length > 0) {
    queryParam.forEach((item) => {
      doc.write(
        `| ${item.name} | ${mustType[item.must]} | ${item.remark} | \n`,
      );
    });
  }

  getRawJSON(rawJSON);
}

function getRawJSON(params) {
  if (Array.isArray(params)) {
    params.forEach((item) => {
      doc.write(
        `| ${item.name} |  ${mustType[item.must]} | ${item.remark} | \n`,
      );
    });
  }
}
