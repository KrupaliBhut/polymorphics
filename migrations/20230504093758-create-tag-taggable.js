'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tag_taggables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tagId: {
        type: Sequelize.INTEGER,
        // references:{
        //   model: 'tag',
        //   key: 'id'
        // }
      },
      taggableId: {
        type: Sequelize.INTEGER,
        // references:{
        //   model: 'image',
        //   key: 'id'
        //   },
          // references:{
          //   model: 'video',
          //   key: 'id'
          //   },
      },
      taggableType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tag_taggables');
  }
};