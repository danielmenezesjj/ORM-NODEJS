module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Pessoas', [
			  {
				  nome: 'Ana Souza',
				  ativo: "Ativo",
				  email: 'ana@ana.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Marcos Cintra',
				  ativo: "Ativo",
				  email: 'marcos@marcos.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Felipe Cardoso',
				  ativo: "Ativo",
				  email: 'felipe@felipe.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Sandra Gomes',
				  ativo: "Desativado",
				  email: 'sandra@sandra.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Paula Morais',
				  ativo: "Ativo",
				  email: 'paula@paula.com',
				  role: 'docente',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Sergio Lopes',
				  ativo: "Ativo",
				  email: 'sergio@sergio.com',
				  role: 'docente',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  }
	  ], {})
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Pessoas', null, {})
	}
  }
  