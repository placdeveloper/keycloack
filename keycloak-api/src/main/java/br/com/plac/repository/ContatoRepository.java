package br.com.plac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import br.com.plac.entities.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

	@Transactional(readOnly=true)
	@Query("SELECT obj FROM Contato obj WHERE obj.tipo = :tipo ORDER BY obj.name")
	public List<Contato> findContatoPorTipo(@Param("tipo")String tipo);
}
