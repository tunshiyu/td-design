/*
 * @文件描述: 堆叠柱状图
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-04-27 17:00:54
 * @LastEditors: 阮旭松
 * @LastEditTime: 2021-02-03 10:06:14
 */
import { Column, ColumnOptions } from '@antv/g2plot';
import { baseConfig, PlotCreateProps, colors, DataItem } from '../../config';
import { createSingleChart, formatMergeConfig } from '../../baseUtils/chart';

/** 获得原始配置 */
const getOriginConfig = (data: DataItem[]) => ({
  ...baseConfig,
  xField: 'date',
  yField: 'value',
  stackField: 'type',
  data,
  color: colors,
});

const createStackColumnPlot = ({ dom, data, config = {}, replaceConfig }: PlotCreateProps<Partial<ColumnOptions>>) => {
  const plot = new Column(dom, formatMergeConfig<ColumnOptions>(getOriginConfig(data), config, replaceConfig));

  plot.render();
  return plot;
};

export default createSingleChart<Partial<ColumnOptions>, DataItem[], Column>(createStackColumnPlot, {
  getOriginConfig,
});
