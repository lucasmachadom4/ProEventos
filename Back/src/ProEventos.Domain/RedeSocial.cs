namespace ProEventos.Domain
{
    public class RedeSocial
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string URL { get; set; }
        public int? EventoId { get; set; }//com ? ele pode ser null
        public Evento Evento { get; set; }
        public int? PalestranteId { get; set; }//com ? ele pode ser null
        public Palestrante Palestrante { get; set; }

}
}